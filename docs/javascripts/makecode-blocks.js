// ============================================================
// Rendu des blocs MakeCode dans le site
// ============================================================
//
// Transforme chaque bloc de code en image de blocs, dessinée
// par le moteur de MakeCode (en français) :
//
//   ```blocks / ```blocks-full     → MakeCode Arcade
//   ```microbit / ```microbit-full → MakeCode micro:bit
//
// La variante -full dessine aussi le bloc "au démarrage".
//
// Un appel à une fonction définie ailleurs doit être déclaré
// dans l'extrait, sinon il reste en JavaScript gris. Précédée
// de "// @hide", la déclaration n'est pas dessinée :
//   // @hide
//   function dessiner () {}
//
// Les variables de type Sprite ou Image doivent être déclarées
// dans l'extrait (let allumette: Sprite = null), sinon leurs
// blocs restent en JavaScript gris. Les déclarations ne sont
// pas dessinées.
// Doc : https://makecode.com/blocks-embed
//
// En cas d'échec (hors ligne, erreur), le code reste affiché.
// ============================================================

(function () {
  // Un moteur de rendu (iframe cachée) par éditeur
  var EDITORS = {
    arcade: { url: "https://arcade.makecode.com", classes: ["blocks", "blocks-full"] },
    microbit: { url: "https://makecode.microbit.org", classes: ["microbit", "microbit-full"] }
  };

  var nextId = 0;
  var state = {};
  Object.keys(EDITORS).forEach(function (name) {
    state[name] = { ready: false, pending: [] };
  });

  function editorOf(pre) {
    return pre.classList.contains("microbit") || pre.classList.contains("microbit-full") ? "microbit" : "arcade";
  }

  function getRenderer(name) {
    var id = "makecode-renderer-" + name;
    var frame = document.getElementById(id);
    if (!frame) {
      state[name].ready = false;
      frame = document.createElement("iframe");
      frame.id = id;
      frame.title = "Rendu des blocs MakeCode";
      frame.setAttribute("aria-hidden", "true");
      frame.style.position = "absolute";
      frame.style.left = "0";
      frame.style.bottom = "0";
      frame.style.width = "1px";
      frame.style.height = "1px";
      frame.style.border = "0";
      frame.style.opacity = "0";
      frame.src = EDITORS[name].url + "/--docs?render=1&lang=" + (document.documentElement.lang || "fr");
      document.body.appendChild(frame);
    }
    return frame;
  }

  function sendSnippet(pre) {
    var name = editorOf(pre);
    // <pre class="blocks" data-packageid="S..."></pre> : projet partagé entier
    var packageId = pre.getAttribute("data-packageid");
    getRenderer(name).contentWindow.postMessage({
      type: "renderblocks",
      id: pre.id,
      code: packageId ? "" : pre.textContent,
      // ```blocks : fragment seul / ```blocks-full : avec "au démarrage"
      options: packageId
        ? { packageId: packageId }
        : { snippetMode: !pre.classList.contains("blocks-full") && !pre.classList.contains("microbit-full") }
    }, EDITORS[name].url);
  }

  function renderPage() {
    Object.keys(EDITORS).forEach(function (name) {
      var selector = EDITORS[name].classes.map(function (c) {
        return "pre." + c + ":not([data-makecode])";
      }).join(", ");
      var snippets = document.querySelectorAll(selector);
      if (snippets.length === 0) return;
      getRenderer(name);
      snippets.forEach(function (pre) {
        pre.id = "makecode-blocks-" + nextId++;
        pre.setAttribute("data-makecode", "loading");
        if (state[name].ready) {
          sendSnippet(pre);
        } else {
          state[name].pending.push(pre);
        }
      });
    });
  }

  window.addEventListener("message", function (ev) {
    var msg = ev.data;
    var name = Object.keys(EDITORS).filter(function (n) {
      return EDITORS[n].url === ev.origin;
    })[0];
    if (!name || !msg || msg.source !== "makecode") return;

    if (msg.type === "renderready") {
      state[name].ready = true;
      state[name].pending.forEach(sendSnippet);
      state[name].pending = [];
    } else if (msg.type === "renderblocks") {
      var pre = document.getElementById(msg.id);
      if (!pre) return;
      if (msg.error || !msg.uri) {
        pre.setAttribute("data-makecode", "error");
        return;
      }
      var img = document.createElement("img");
      img.className = "makecode-blocks";
      img.src = msg.uri;
      img.width = msg.width;
      img.height = msg.height;
      // Les lignes précédées de "// @hide" ne sont pas dessinées : on les retire du texte alternatif
      img.alt = "Blocs MakeCode : " + pre.textContent.replace(/\/\/ @hide\n[^\n]*\n/g, "").trim();
      if (pre.hasAttribute("data-packageid")) {
        // Projet entier : très large, on le fait défiler horizontalement
        img.alt = "Blocs MakeCode du projet " + pre.getAttribute("data-packageid");
        img.classList.add("makecode-project");
        img.width = Math.round(msg.width * 0.6);
        img.height = Math.round(msg.height * 0.6);
        var wrapper = document.createElement("div");
        wrapper.className = "makecode-project-wrapper";
        wrapper.appendChild(img);
        pre.replaceWith(wrapper);
      } else {
        pre.replaceWith(img);
      }
    }
  });

  // Compatible avec navigation.instant (pas de rechargement complet)
  if (typeof document$ !== "undefined") {
    document$.subscribe(renderPage);
  } else {
    document.addEventListener("DOMContentLoaded", renderPage);
  }
})();

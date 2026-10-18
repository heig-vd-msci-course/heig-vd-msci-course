// ============================================================
// Rendu des blocs MakeCode Arcade dans le site
// ============================================================
//
// Transforme chaque bloc de code ```blocks (ou ```blocks-full)
// en image de blocs, dessinée par le moteur de MakeCode Arcade
// (en français).
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
  var MAKECODE_URL = "https://arcade.makecode.com/";
  var MAKECODE_ORIGIN = "https://arcade.makecode.com";
  var RENDERER_ID = "makecode-renderer";

  var ready = false;
  var nextId = 0;
  var pending = [];

  function getRenderer() {
    var frame = document.getElementById(RENDERER_ID);
    if (!frame) {
      ready = false;
      frame = document.createElement("iframe");
      frame.id = RENDERER_ID;
      frame.title = "Rendu des blocs MakeCode";
      frame.setAttribute("aria-hidden", "true");
      frame.style.position = "absolute";
      frame.style.left = "0";
      frame.style.bottom = "0";
      frame.style.width = "1px";
      frame.style.height = "1px";
      frame.style.border = "0";
      frame.style.opacity = "0";
      frame.src = MAKECODE_URL + "--docs?render=1&lang=" + (document.documentElement.lang || "fr");
      document.body.appendChild(frame);
    }
    return frame;
  }

  function sendSnippet(pre) {
    getRenderer().contentWindow.postMessage({
      type: "renderblocks",
      id: pre.id,
      code: pre.textContent,
      // ```blocks : fragment seul / ```blocks-full : avec "au démarrage"
      options: { snippetMode: !pre.classList.contains("blocks-full") }
    }, MAKECODE_ORIGIN);
  }

  function renderPage() {
    var snippets = document.querySelectorAll("pre.blocks:not([data-makecode]), pre.blocks-full:not([data-makecode])");
    if (snippets.length === 0) return;
    getRenderer();
    snippets.forEach(function (pre) {
      pre.id = "makecode-blocks-" + nextId++;
      pre.setAttribute("data-makecode", "loading");
      if (ready) {
        sendSnippet(pre);
      } else {
        pending.push(pre);
      }
    });
  }

  window.addEventListener("message", function (ev) {
    var msg = ev.data;
    if (ev.origin !== MAKECODE_ORIGIN || !msg || msg.source !== "makecode") return;

    if (msg.type === "renderready") {
      ready = true;
      pending.forEach(sendSnippet);
      pending = [];
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
      img.alt = "Blocs MakeCode : " + pre.textContent.trim();
      pre.replaceWith(img);
    }
  });

  // Compatible avec navigation.instant (pas de rechargement complet)
  if (typeof document$ !== "undefined") {
    document$.subscribe(renderPage);
  } else {
    document.addEventListener("DOMContentLoaded", renderPage);
  }
})();

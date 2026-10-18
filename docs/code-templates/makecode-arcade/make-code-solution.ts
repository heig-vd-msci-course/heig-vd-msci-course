 // Variables
  let allumettes = 0
  let monTour = false
  let ordiRetire = 0

  // Initialisation
  allumettes = 20
  monTour = true
  game.splash("20 allumettes - A:1 B:2 Haut:3")

  // Bouton A - Retirer 1 allumette
  controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
      if (monTour == true) {
          allumettes += -1
          game.splash("" + allumettes + " allumettes")
          if (allumettes <= 0) {
              game.over(false)
          }
          monTour = false
          pause(1000)
          // Stratégie de l'ordinateur
          ordiRetire = (allumettes - 1) % 4
          if (ordiRetire == 0) {
              ordiRetire = 1
          }
          allumettes += 0 - ordiRetire
          game.splash("Ordi retire " + ordiRetire)
          if (allumettes <= 0) {
              game.over(true)
          }
          monTour = true
          game.splash("" + allumettes + " allumettes")
      }
  })

  // Bouton B - Retirer 2 allumettes
  controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
      if (monTour == true) {
          allumettes += -2
          game.splash("" + allumettes + " allumettes")
          if (allumettes <= 0) {
              game.over(false)
          }
          monTour = false
          pause(1000)
          ordiRetire = (allumettes - 1) % 4
          if (ordiRetire == 0) {
              ordiRetire = 1
          }
          allumettes += 0 - ordiRetire
          game.splash("Ordi retire " + ordiRetire)
          if (allumettes <= 0) {
              game.over(true)
          }
          monTour = true
          game.splash("" + allumettes + " allumettes")
      }
  })

  // Flèche haut - Retirer 3 allumettes
  controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
      if (monTour == true) {
          allumettes += -3
          game.splash("" + allumettes + " allumettes")
          if (allumettes <= 0) {
              game.over(false)
          }
          monTour = false
          pause(1000)
          ordiRetire = (allumettes - 1) % 4
          if (ordiRetire == 0) {
              ordiRetire = 1
          }
          allumettes += 0 - ordiRetire
          game.splash("Ordi retire " + ordiRetire)
          if (allumettes <= 0) {
              game.over(true)
          }
          monTour = true
          game.splash("" + allumettes + " allumettes")
      }
  })

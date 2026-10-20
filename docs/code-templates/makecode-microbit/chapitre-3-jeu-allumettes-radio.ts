function nouvellePartie () {
    allumettes = 20
    dessiner()
}
function dessiner () {
    basic.clearScreen()
    for (let index = 0; index <= allumettes - 1; index++) {
        led.plot(index % 5, Math.idiv(index, 5))
    }
    if (monTour) {
        led.plot(2, 4)
    }
}
function bruler () {
    derniere = allumettes - 1
    music.play(music.createSoundExpression(WaveShape.Noise, 1600, 1, 255, 0, 400, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    for (let index = 0; index < 8; index++) {
        led.plotBrightness(derniere % 5, Math.idiv(derniere, 5), randint(10, 255))
        basic.pause(50)
    }
    allumettes += -1
    dessiner()
}
function retirer (nombre: number) {
    for (let index = 0; index < nombre; index++) {
        if (allumettes > 0) {
            bruler()
        }
    }
}
function jouer (nombre: number) {
    if (monTour && allumettes > 0) {
        monTour = false
        radio.sendNumber(nombre)
        retirer(nombre)
        if (allumettes <= 0) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
            basic.showString("PERDU")
            basic.showIcon(IconNames.Skull)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    jouer(1)
})
input.onButtonPressed(Button.B, function () {
    jouer(2)
})
input.onButtonPressed(Button.AB, function () {
    jouer(3)
})
radio.onReceivedNumber(function (receivedNumber) {
    retirer(receivedNumber)
    if (allumettes <= 0) {
        music.play(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        basic.showString("GAGNE")
        basic.showIcon(IconNames.Happy)
    } else {
        monTour = true
        dessiner()
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("NOUVELLE")
    monTour = true
    nouvellePartie()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "NOUVELLE") {
        monTour = false
        nouvellePartie()
    }
})
let derniere = 0
let allumettes = 0
let monTour = false
radio.setGroup(0)
nouvellePartie()

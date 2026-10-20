function nouvellePartie () {
    allumettes = 20
    joueuse = 1
    dessiner()
}
function dessiner () {
    basic.clearScreen()
    for (let index = 0; index <= allumettes - 1; index++) {
        led.plot(index % 5, Math.idiv(index, 5))
    }
    if (joueuse == 1) {
        led.plot(0, 4)
    } else {
        led.plot(4, 4)
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
    if (allumettes <= 0) {
        music.play(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        basic.showString("J" + joueuse + " PERD")
        basic.showIcon(IconNames.Skull)
    } else {
        if (joueuse == 1) {
            joueuse = 2
        } else {
            joueuse = 1
        }
        dessiner()
    }
}
input.onButtonPressed(Button.A, function () {
    retirer(1)
})
input.onButtonPressed(Button.B, function () {
    retirer(2)
})
input.onButtonPressed(Button.AB, function () {
    retirer(3)
})
input.onGesture(Gesture.Shake, function () {
    nouvellePartie()
})
let derniere = 0
let joueuse = 0
let allumettes = 0
nouvellePartie()

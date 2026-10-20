input.onButtonPressed(Button.A, function () {
    radio.sendString("HELLO")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(0)

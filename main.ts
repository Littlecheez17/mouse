bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Whole))
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playTone(277, music.beat(BeatFraction.Quarter))
    music.playTone(208, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    mouse.click()
})
input.onButtonPressed(Button.B, function () {
    mouse.rightClick()
})

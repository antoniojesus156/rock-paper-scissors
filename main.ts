let counter = 0
input.onLogoEvent(TouchButtonEvent.Released, function () {
    counter = randint(1, 3)
    if (counter == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (counter == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (counter == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})

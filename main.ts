let COL = 0
let ROW = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            ROW = randint(0, 4)
            COL = randint(0, 4)
        }
        if (led.point(COL, ROW)) {
            led.unplot(COL, ROW)
            led.plot(COL + 1, ROW)
        }
    }
})

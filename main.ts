Rover.Move(130)
basic.pause(2000)
if (Rover.LineTracking() == 0) {
    Rover.Move(70)
} else {
    if (Rover.LineTracking() == 1) {
        Rover.MotorRunDual(70, 40)
        basic.pause(200)
    } else {
        if (Rover.LineTracking() == 3) {
            Rover.MotorRunDual(70, 40)
            basic.pause(200)
        } else {
            if (Rover.LineTracking() == 4) {
                Rover.MotorRunDual(40, 80)
                basic.pause(200)
            } else {
                if (Rover.LineTracking() == 5) {
                    Rover.MotorRunDual(70, 70)
                } else {
                    if (Rover.LineTracking() == 6) {
                        Rover.MotorRunDual(80, 40)
                        basic.pause(200)
                    } else {
                        Rover.MotorRunDual(30, 30)
                    }
                }
            }
        }
    }
}
basic.forever(function () {
    for (let index = 0; index < 69; index++) {
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED_All), Rover.colors(RoverColors.Red))
        basic.pause(1000)
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED_All), Rover.colors(RoverColors.Yellow))
        basic.pause(1000)
    }
    for (let index = 0; index < 69; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    music.playMelody("E E - F F - A B ", 180)
})

let Distance = 0
basic.forever(function () {
    Distance = Kitronik_Move_Motor.measure()
    basic.showNumber(42)
    if (Distance > 10) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 42)
    } else if (Distance < 10) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 42)
    } else {
        Kitronik_Move_Motor.stop()
    }
})

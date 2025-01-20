basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 30) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (pins.analogReadPin(AnalogPin.P0) > 25) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (pins.analogReadPin(AnalogPin.P0) > 25 && pins.analogReadPin(AnalogPin.P0) < 30) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})

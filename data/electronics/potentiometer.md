# Potentiometer
## What it is
A potentiometer (or "pot") is a three-terminal resistor with a sliding or rotating contact that forms an adjustable voltage divider. It is essentially a volume knob.

## Real-world Example
The volume knob on a stereo, the dimmer switch for lights, and the joystick on a game controller.

## How it works
Inside is a circular strip of resistive material. As you turn the knob, the "wiper" (the middle pin) moves along the strip, changing how much resistance is between the middle pin and the side pins.

## Beginner Explanation (2nd-5th Class)
A potentiometer is like a "dimmer" for your robot. Instead of just "On" or "Off," it lets you choose "a little bit," "medium," or "a lot." You can use it to change how fast a motor spins or how bright an LED glows.

## Intermediate Explanation (6th-10th Class)
When you connect the two side pins to Power (5V) and Ground (GND), the middle pin will give you a voltage anywhere between 0V and 5V depending on where you turn the knob. This is perfect for the Arduino's "Analog Input," which turns that voltage into a number between 0 and 1023.

## Engineering Explanation (Diploma/Engineering)
Potentiometers have a "Taper":
- **Linear Taper (Type B):** Resistance changes at a constant rate (good for sensors).
- **Logarithmic Taper (Type A):** Resistance changes slowly at first and then very fast (good for audio volume because humans hear sound logarithmically).
Common values are 10k$\Omega$ and 100k$\Omega$.

## Safety Tips
- Don't force the knob past its stopping point, or you will break the delicate parts inside.
- Potentiometers are for signals, not for carrying high power. Don't use one to directly control a large motor, or it will burn up.

## Common Mistakes
- Getting the pins mixed up. Always remember: the **Middle Pin** is the signal (wiper).
- Forgetting that the output is "Analog," meaning you must use the `analogRead()` function in your code.

## Applications
- Controlling the speed of a robot.
- Adjusting the brightness of an LCD screen.
- Calibrating sensor sensitivity.

## Simple Experiments
**LED Dimmer:** Connect a potentiometer to an Arduino. Use the `analogRead()` value to change the brightness of an LED using `analogWrite()` (PWM).

## FAQs
**Q: What does the "10k" on the back mean?**
A: It means the total resistance from one side pin to the other is 10,000 Ohms.
**Q: Is it the same as a Trimmer?**
A: A Trimmer (or Trimpot) is a tiny potentiometer that you adjust once with a screwdriver and then leave alone.

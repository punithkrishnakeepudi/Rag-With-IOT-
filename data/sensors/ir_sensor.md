# IR Sensor (Infrared)
## What it is
An Infrared (IR) sensor is an electronic device that emits and/or detects infrared radiation to sense certain aspects of its surroundings.

## Real-world Example
The TV remote control uses an IR LED to send signals to your television. Also, automatic hand dryers use IR sensors to detect your hands.

## How it works
A basic IR obstacle sensor consists of an IR LED (transmitter) and a photodiode (receiver). The LED emits infrared light. If an object is in front, the light reflects back to the photodiode, which changes its resistance, signalling a detection.

## Beginner Explanation (2nd-5th Class)
An IR sensor is like a tiny flashlight that sends out "invisible light." If something is in front of it, the light bounces back and the sensor says, "Hey! I see something!" It's like playing a game of peek-a-boo with invisible light.

## Intermediate Explanation (6th-10th Class)
Infrared is a type of light that humans cannot see but sensors can. The IR transmitter sends out light at a specific wavelength. Dark surfaces absorb IR light, while light surfaces reflect it. This is why IR sensors are often used in line-following robots to tell the difference between a black line and a white floor.

## Engineering Explanation (Diploma/Engineering)
IR sensors operate in the 700nm to 1mm wavelength range. Proximity sensors often use a 38kHz modulated carrier frequency to avoid interference from ambient sunlight or indoor lighting. The output is typically digital (High/Low) via a comparator (like LM393) with a potentiometer for sensitivity adjustment.

## Safety Tips
- Don't look directly at the IR LED for long periods, even if it looks "off" (it's actually bright in the IR spectrum).
- Avoid using them in direct bright sunlight as it can "blind" the sensor with too much IR noise.

## Common Mistakes
- Expecting it to detect objects from a long distance; most cheap modules only work within 2-20cm.
- Using it on black surfaces and wondering why it doesn't "see" anything (black absorbs the signal).

## Applications
- Line following robots.
- Automatic faucets.
- Security alarms (PIR sensors).

## Simple Experiments
**Line Follower:** Use two IR sensors on the bottom of a robot to detect a black tape track. If the left sensor sees black, turn left!

## FAQs
**Q: Why does the sensor light up when I point my phone camera at it?**
A: Most phone cameras can "see" infrared light, even though your eyes can't!
**Q: Can it measure distance?**
A: Simple IR proximity sensors only detect "if" something is there. You need an IR distance sensor (like Sharp GP2Y0A21YK0F) for actual measurements.

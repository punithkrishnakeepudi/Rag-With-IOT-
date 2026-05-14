# Motion Sensor (PIR)
## What it is
A PIR (Passive Infrared) sensor is a device that detects motion by measuring changes in the infrared levels emitted by surrounding objects.

## Real-world Example
Security lights that turn on when someone walks by, and automatic sliding doors in supermarkets.

## How it works
Everything that has heat (like a human or an animal) emits infrared radiation. The PIR sensor has two "windows" that look at the room. When a warm body walks past, it moves from the view of one window to the other, creating a "change" that the sensor detects as motion.

## Beginner Explanation (2nd-5th Class)
A PIR sensor is a "warmth hunter." It doesn't use a camera to see you; it "feels" your body heat moving! If you stand perfectly still like a statue, it might think you've disappeared!

## Intermediate Explanation (6th-10th Class)
"Passive" means the sensor doesn't send out any energy; it only receives it. It has a special lens called a Fresnel Lens (the white plastic dome) that focuses the infrared energy from the room onto the sensing element. Most modules have two settings: "Delay" (how long the light stays on) and "Sensitivity" (how far away it can see).

## Engineering Explanation (Diploma/Engineering)
The sensing element is usually a pyroelectric sensor, which generates a small electrical charge when exposed to IR radiation. The Fresnel lens divides the environment into multiple "detection zones." As an object moves across these zones, the differential voltage between the two internal sensing elements triggers an output pulse. Signal processing usually includes a band-pass filter to ignore slow temperature changes (like the sun moving).

## Safety Tips
- Do not place the sensor near heaters or air conditioners, as the moving air can cause "false triggers."
- The white dome is a lens; if you crack or remove it, the sensor won't work correctly.

## Common Mistakes
- Thinking it can see through glass (glass blocks infrared radiation!).
- Placing it in a spot where it looks directly at a sunny window.

## Applications
- Burglar alarms.
- Automatic lighting for hallways.
- Energy-saving fans.

## Simple Experiments
**Intruder Alert:** Connect a PIR sensor to an Arduino. When it detects motion, make an LED flash and send a message to your computer saying "Someone is in the room!"

## FAQs
**Q: Can it see my dog?**
A: Yes, if your dog is warm, the sensor will detect its movement.
**Q: How far can it see?**
A: Most standard PIR sensors can detect motion up to about 5 to 7 meters (15-20 feet) away.

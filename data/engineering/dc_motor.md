# DC Motor
## What it is
A Direct Current (DC) motor is an electric motor that runs on direct current electricity and spins continuously in one direction.

## Real-world Example
The wheels on a toy car, the fan in your computer, and the vibration motor inside your smartphone.

## How it works
Inside the motor are magnets and coils of wire. When electricity flows through the coils, it creates a magnetic field that pushes against the magnets, causing the middle part (the shaft) to spin.

## Beginner Explanation (2nd-5th Class)
A DC motor is the "muscle" of your robot's wheels. When you give it electricity, it spins round and round very fast. If you swap the wires, it will spin the other way! It's how your robot moves forward and backward.

## Intermediate Explanation (6th-10th Class)
DC motors spin very fast but don't have much "Torque" (strength). To make a robot move, we usually use a **Geared DC Motor**, which uses a box of gears to slow down the spin and make it much stronger. You can't control the speed easily with just a battery; you need to use **PWM** (Pulse Width Modulation) from a microcontroller.

## Engineering Explanation (Diploma/Engineering)
The speed of a DC motor is proportional to the voltage applied, and the torque is proportional to the current. Because a motor is an inductive load, it creates "Back EMF" (voltage spikes) when it stops. You MUST use a **Motor Driver** (like an H-Bridge) to control a DC motor from an Arduino, as the Arduino pins cannot provide enough current.

## Safety Tips
- Motors can get hot if they are "stalled" (trying to spin but stuck).
- Keep your hair and loose clothing away from spinning motor shafts!

## Common Mistakes
- Connecting a motor directly to an Arduino pin (this will likely burn out the Arduino!).
- Forgetting a "Flyback Diode" to protect your electronics from motor noise.

## Applications
- Wheels for mobile robots.
- Propellers for fans.
- Conveyor belts.

## Simple Experiments
**Propeller Fan:** Connect a small DC motor to a battery and put a plastic propeller on the end. See how it creates a breeze. Now swap the battery wires and watch it blow air the other way!

## FAQs
**Q: How do I make it go slower?**
A: You can use a lower voltage or use an Arduino with a Motor Driver to send a PWM signal.
**Q: What is a "Gearbox"?**
A: It's a set of gears attached to the motor that converts high speed into high strength (torque).

# Servo Motor
## What it is
A servo motor is a type of motor that can be instructed to move to a specific position (e.g., exactly 90 degrees) and stay there.

## Real-world Example
The steering in an RC car, the "joints" of a humanoid robot, and the flaps on the wings of an airplane.

## How it works
Inside a servo is a small DC motor, a set of gears to make it strong, and a special sensor (potentiometer) that tells the motor where it is. A small control circuit inside listens to your signals and moves the motor to the exact angle you want.

## Beginner Explanation (2nd-5th Class)
A servo is a "smart motor." While a normal motor just spins round and round, a servo motor can "point" to where you want. If you tell it "Point at the door," it will turn and hold its arm there. It's perfect for making a robot arm wave hello!

## Intermediate Explanation (6th-10th Class)
Most hobby servos can rotate from **0 to 180 degrees**. They have three wires: Brown (GND), Red (5V), and Orange (Signal). You control them using a **PWM** signal. The "width" of the pulse tells the servo which angle to move to (usually 1ms for 0$^\circ$ and 2ms for 180$^\circ$).

## Engineering Explanation (Diploma/Engineering)
Servos are closed-loop systems. They use "Error Feedback" to maintain their position. If you try to push a servo arm away from its set angle, it will fight back to stay in place. "Continuous Rotation Servos" are a special type where the feedback is removed, allowing them to spin 360 degrees like a normal motor but still be controlled by PWM signals.

## Safety Tips
- Do not try to move the servo arm with your hand while it is turned on; you might strip the plastic gears inside.
- Servos can pull a lot of current. If you use many servos, you should use a separate battery for them instead of powering them from the Arduino.

## Common Mistakes
- Connecting the wires backward. (Remember: Red is always in the middle, so if you plug it in backward, you won't burn it, but it won't work!).
- Trying to make a standard servo spin 360 degrees (it has a physical "stop" inside that will break).

## Applications
- Robotic arms and grippers.
- Camera gimbals.
- Steering for RC vehicles.

## Simple Experiments
**Waving Robot:** Connect a servo to an Arduino. Use the "Sweep" example code to make the servo arm move back and forth continuously like it's waving at you.

## FAQs
**Q: What is "Torque"?**
A: Torque is the "strength" of the motor. A high-torque servo can lift heavier things.
**Q: What is a "Metal Gear" servo?**
A: Standard servos have plastic gears. Metal gear servos are much stronger and won't break as easily when the robot hits something.

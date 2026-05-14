# Stepper Motor
## What it is
A stepper motor is a brushless DC electric motor that divides a full rotation into a number of equal steps.

## Real-world Example
3D printers, CNC machines, and the paper feeder inside a standard office printer.

## How it works
Inside the motor are multiple coils organized in "phases." By energizing these coils in a specific sequence, the motor moves one tiny "step" at a time. It's like a clock hand that only moves when the clock ticks.

## Beginner Explanation (2nd-5th Class)
A stepper motor is a "precision motor." While a normal motor spins like a fan, a stepper motor moves in tiny, tiny clicks. You can tell it to "move exactly 50 clicks to the left," and it will do it perfectly. It's how 3D printers move so carefully to build beautiful things.

## Intermediate Explanation (6th-10th Class)
Most stepper motors have **200 steps** per full revolution (1.8 degrees per step). They are very strong and can hold their position perfectly even without a brake. However, they use a lot of power even when they aren't moving. You need a special **Stepper Driver** (like an A4988) to control them.

## Engineering Explanation (Diploma/Engineering)
Stepper motors (usually Bipolar or Unipolar) are open-loop systems but are highly accurate. "Microstepping" is a technique used by drivers to divide a single step into smaller parts (up to 1/256th of a step) for smoother motion. They have high torque at low speeds but the torque drops quickly as the speed increases.

## Safety Tips
- **NEVER** unplug a stepper motor while the power is on; it can create a massive voltage spike that will instantly kill your stepper driver.
- These motors can get very hot (up to 80$^\circ$C) during normal operation.

## Common Mistakes
- Connecting the 4 wires in the wrong order (you need to find the "pairs" of coils using a multimeter).
- Trying to run a large stepper motor directly from an Arduino (it will never work!).

## Applications
- 3D printers and CNC mills.
- Precise camera sliders.
- Robotic telescope mounts.

## Simple Experiments
**Precision Pointer:** Connect a stepper motor and a driver to an Arduino. Program it to turn exactly 90 degrees, wait 2 seconds, and then turn 90 degrees back.

## FAQs
**Q: Why does it make a high-pitched singing noise?**
A: That's the sound of the electricity pulsing through the coils at high speeds. It's normal for stepper motors!
**Q: Can it spin fast like a fan?**
A: Not really. Stepper motors are for precision and strength, not for high speed.

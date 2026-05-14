# 9V Battery
## What it is
A rectangular battery with both terminals on the top. It is actually made of six tiny 1.5V cells stacked together inside the metal box.

## Real-world Example
Smoke detectors, walkie-talkies, and guitar pedals.

## How it works
Because it has 6 cells in series, it provides a high voltage (9V) but it cannot provide much current (flow) for very long.

## Beginner Explanation (2nd-5th Class)
A 9V battery is like a "tall" battery. It's great for things that need a big "push" to start, like a loud buzzer or a long strip of lights. It's very easy to use with your Arduino because the clips snap right on!

## Intermediate Explanation (6th-10th Class)
While 9V sounds like a lot, these batteries have a very low capacity (only about 500 mAh). This means they will die very quickly if you use them to run motors. They are best for powering the Arduino itself or small sensors.

## Engineering Explanation (Diploma/Engineering)
The internal resistance of a standard 9V alkaline battery is quite high ($\approx 1-2 \Omega$). This means as you pull more current, the voltage "sags" significantly. For high-current robotics, a 9V battery is a poor choice compared to a Li-ion pack.

## Safety Tips
- Do not put a 9V battery in your pocket with loose change or keys. If a coin touches both terminals at the same time, the battery will get very hot and could burn you!
- Always use a proper 9V battery clip to connect it to your circuit.

## Common Mistakes
- Using a 9V battery to power 4 or 5 motors. The battery will be empty in less than 10 minutes.
- Touching the terminals with your tongue (it gives a tiny, unpleasant shock!).

## Applications
- Powering an Arduino Uno (via the DC jack).
- Smoke alarms.
- Portable multimeters.

## Simple Experiments
**Arduino on the Go:** Connect a 9V battery to the DC jack of your Arduino. Now your robot can move around the room without being plugged into your computer!

## FAQs
**Q: Can I recharge it?**
A: Usually no. Standard 9V batteries are Alkaline. There are rechargeable 9V batteries (NiMH or Li-ion), but they usually cost more.
**Q: Why are both holes on the top?**
A: It makes it easy to snap on a connector, and it saves space inside the devices that use them.

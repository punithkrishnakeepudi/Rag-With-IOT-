# RGB LED
## What it is
An RGB LED is actually three LEDs (Red, Green, and Blue) inside a single package. By mixing these colors, it can produce almost any color in the rainbow, including white.

## Real-world Example
The colorful lights inside "Gaming" computers, large outdoor video screens, and "smart" lightbulbs that change color using an app.

## How it works
It has 4 pins. One is common (either to Ground or Power), and the other three control the Red, Green, and Blue parts. By turning them on at different brightness levels, you create different colors (e.g., Red + Blue = Purple).

## Beginner Explanation (2nd-5th Class)
An RGB LED is like a tiny "paint palette." Just like you can mix red and blue paint to make purple, your robot can mix red and blue light to make purple light! It's one light that can be any color you want.

## Intermediate Explanation (6th-10th Class)
There are two types:
- **Common Cathode:** The long pin goes to Ground (-). You send Power (+) to the R, G, and B pins.
- **Common Anode:** The long pin goes to Power (+). You send Ground (-) to the R, G, and B pins.
To get colors like orange or pink, we use **PWM** (Pulse Width Modulation) to dim the different colors to the exact level we need.

## Engineering Explanation (Diploma/Engineering)
In an RGB LED, each color has a different $V_f$ (Red $\approx 2V$, Blue/Green $\approx 3.2V$). This means you should ideally use three **different** resistor values to get a perfectly balanced white light. For example: $150\Omega$ for Red and $100\Omega$ for Green and Blue.

## Safety Tips
- Always check if your LED is Common Cathode or Common Anode before wiring, or it won't work.
- Use resistors on all three color pins!

## Common Mistakes
- Connecting the "Common" pin to the wrong place.
- Using only one resistor on the common pin (this causes the colors to change brightness when you turn on more than one).

## Applications
- Status indicators that change color (Green for OK, Red for Error, Blue for Charging).
- Atmospheric lighting.
- Pixel displays.

## Simple Experiments
**Rainbow Light:** Connect an RGB LED to three PWM pins on your Arduino. Use a `for` loop to slowly fade through all the colors of the rainbow!

## FAQs
**Q: Can it make black?**
A: "Black" in light is just "OFF." So, to make black, you just turn all three colors off.
**Q: How many colors can it make?**
A: With an Arduino, you can choose 256 levels for each color. $256 \times 256 \times 256$ = Over 16 million possible colors!

# Buzzer (Active & Passive)
## What it is
A buzzer is a small component that makes a beeping or buzzing sound when electricity is applied.

## Real-world Example
The "beep" your microwave makes when the food is done, the alarm on your digital watch, and the warning sound in a car when the door is open.

## How it works
It uses a "Piezoelectric" element—a tiny disc that vibrates very fast when electricity hits it. This vibration moves the air and creates the sound you hear.

## Beginner Explanation (2nd-5th Class)
A buzzer is like a tiny "mouth" for your robot. It can't speak words, but it can beep to say "I'm happy!" or "Danger!" or even play a simple song like "Happy Birthday."

## Intermediate Explanation (6th-10th Class)
There are two types:
- **Active Buzzer:** Just give it power, and it beeps at one constant tone. It's very easy to use.
- **Passive Buzzer:** It doesn't beep by itself. You have to send it a fast PWM signal (frequency) to make it vibrate. This means you can change the "pitch" to play different musical notes!

## Engineering Explanation (Diploma/Engineering)
Active buzzers have an internal oscillator. Passive buzzers act as a capacitive load. To play music on a passive buzzer, you use the `tone()` function in Arduino, which generates a square wave. The frequency ($f$) determines the musical note (e.g., $440Hz$ is a Middle A).

## Safety Tips
- Buzzers can be very loud! Don't hold one right next to your ear while it's beeping.
- Some buzzers have a "+" mark on the top; make sure you connect that to the positive wire.

## Common Mistakes
- Using a "Passive" buzzer and wondering why it only makes a tiny "click" sound when you give it power.
- Thinking an active buzzer can play music (it can only play one single beep).

## Applications
- Alarm systems.
- Audible feedback for buttons.
- Simple electronic music.

## Simple Experiments
**Electronic Piano:** Connect 3 buttons and a passive buzzer to an Arduino. Program each button to play a different note (Do, Re, Mi) when pressed.

## FAQs
**Q: How do I tell them apart?**
A: Look at the bottom. An active buzzer usually has a sealed bottom (green or black plastic), while a passive buzzer often shows the green circuit board.
**Q: Why is there a sticker on the top?**
A: That's to protect the buzzer during manufacturing. You should peel it off to make the sound louder!

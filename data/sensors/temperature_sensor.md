# Temperature Sensor (DHT11/LM35)
## What it is
A temperature sensor is a device that collects data about the temperature of its environment and converts it into a signal that we can read.

## Real-world Example
Digital thermometers, air conditioners, and even your smartphone have temperature sensors to prevent overheating.

## How it works
Sensors like the LM35 produce a voltage that is directly proportional to the Celsius temperature. Others, like the DHT11, use a thermistor (a resistor that changes with heat) and send a digital signal.

## Beginner Explanation (2nd-5th Class)
Think of this sensor as a tiny electronic tongue that can taste how hot or cold the air is. Instead of saying "Ouch!" when it's hot, it sends a number to our computer to tell us exactly how warm the room is.

## Intermediate Explanation (6th-10th Class)
The DHT11 sensor measures both temperature and humidity. It contains a capacitive humidity sensor and a thermistor. A thermistor's resistance changes based on temperature. The sensor has a small chip inside that converts these resistance changes into digital bits that an Arduino can understand.

## Engineering Explanation (Diploma/Engineering)
The LM35 is an analog sensor with a linear scale factor of $+10mV/^{\circ}C$. It has a range of $-55^{\circ}C$ to $+150^{\circ}C$. The DHT11 is a digital sensor using a custom single-wire protocol for data transmission. It requires precise timing to read the 40-bit data packet (16 bits humidity, 16 bits temperature, 8 bits checksum).

## Safety Tips
- Be careful when measuring very hot things like boiling water; make sure your sensor is waterproof and rated for those temperatures.
- Do not reverse the polarity (VCC and GND), as it can burn the sensor instantly.

## Common Mistakes
- Using a non-waterproof sensor to measure liquid temperature.
- Forgetting a pull-up resistor (usually 4.7k or 10k) on the data line of a DHT sensor.

## Applications
- Weather stations.
- Greenhouse climate control.
- Engine temperature monitoring.

## Simple Experiments
**Digital Thermometer:** Connect a DHT11 to an LCD display and show the current temperature and humidity of your room in real-time.

## FAQs
**Q: Why is the reading slightly different from my wall thermometer?**
A: Every sensor has an "accuracy range." The DHT11 is accurate within $\pm 2^{\circ}C$.
**Q: Can it measure body temperature?**
A: Standard electronics sensors aren't usually precise enough for medical use, but they can give you a general idea.

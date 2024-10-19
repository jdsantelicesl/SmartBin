import pyfirmata
import time

# Define the port where Arduino is connected
# Example: 'COM3' for Windows or '/dev/ttyUSB0' for Linux/Mac
port = "COM7"

# Establish connection with the Arduino board
board = pyfirmata.Arduino(port)

# Start an iterator to read input values continuously
it = pyfirmata.util.Iterator(board)
it.start()

# Example: set pin 13 (built-in LED on most Arduino boards) as an output
led = board.get_pin("d:12:o")  # d: digital, 13: pin number, o: output

# Blink LED in an infinite loop
while True:
    led.write(1)  # Turn on LED
    time.sleep(1)  # Wait 1 second
    led.write(0)  # Turn off LED
    time.sleep(1)  # Wait 1 second

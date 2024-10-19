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

servo_pin = board.get_pin("d:9:s")

def set_servo_angle(pos):
    # Three positions of bins. Angles subject to change depending on orientatio
    if pos == 1:
        servo_pin.write(30)
    if pos == 2:
        servo_pin.write(60)
    if pos == 3:
        servo_pin.write(90)
    time.sleep(0.05) # can move down to 0.015, set to 0.05 as standard


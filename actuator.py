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

def set_servo_angle(angle):
    servo_pin.write(angle)
    time.sleep(0.015)


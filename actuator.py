import RPi.GPIO as GPIO
import time

# Set up GPIO using BCM numbering
GPIO.setmode(GPIO.BCM)

# Set pin 18 as an output pin for the servo
servo_pin = 18
GPIO.setup(servo_pin, GPIO.OUT)

# Create a PWM instance on the servo pin at 50Hz
pwm = GPIO.PWM(servo_pin, 50)
pwm.start(0)


def set_angle(angle):
    # Calculate duty cycle based on angle
    duty = angle / 18 + 2  # Convert angle to duty cycle
    pwm.ChangeDutyCycle(duty)
    time.sleep(1)  # Wait for the servo to reach the position


# Pass integer as pos. Recycle = 1, Landfill = 2, Compost = 3
def set_servo_angle(pos):
    # Three positions of bins. Angles subject to change depending on orientatio
    if pos == 1:
        set_angle(30)
    if pos == 2:
        set_angle(60)
    if pos == 3:
        set_angle(90)
    time.sleep(2)  # can move down to 0.015, set to 0.05 as standard


# Stop PWM and clean up
pwm.stop()
GPIO.cleanup()

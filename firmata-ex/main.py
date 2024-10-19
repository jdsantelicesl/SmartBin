import cv2
from ultralytics import YOLO
from pyfirmata import Arduino, util
import time
from dotenv import load_dotenv
import os
load_dotenv()

# Initialize YOLOv8 model
model = YOLO('yolov8n.pt')  # Make sure you have yolov8n.pt or replace with your model

# Initialize PyFirmata and specify the port (adjust the port as per your setup)
board = Arduino(os.getenv("PORT"))  # Replace with your port (e.g., '/dev/ttyACM0', 'COM3' on Windows)

# Start an iterator thread for the board
it = util.Iterator(board)
it.start()

# Define which Arduino pin you want to control
led_pin = board.get_pin('d:12:o')  # For example, using digital pin 13 (LED)

cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Error: Webcam not detected.")
    exit()

while True:
    ret, frame = cap.read()

    if not ret:
        print("Failed to grab frame")
        break

    # Perform object detection on the frame using YOLOv8
    results = model(frame)

    # Annotate the frame with detection results (bounding boxes and labels)
    annotated_frame = results[0].plot()

    # Check if any 'person' is detected (you can change this to another object class)
    detected_person = False
    for result in results[0].boxes:
        if result.cls == 0:  # Class 0 corresponds to 'person' in COCO dataset
            detected_person = True
            break

    # Send a signal to Arduino based on detection
    if detected_person:
        print("Person detected - turning LED ON")
        led_pin.write(1)  # Turn on the LED
    else:
        print("No person detected - turning LED OFF")
        led_pin.write(0)  # Turn off the LED

    # Display the frame with annotations
    cv2.imshow('YOLOv8 Object Detection', annotated_frame)

    # Press 'q' to break the loop and stop the program
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()

# Turn off the LED before closing
led_pin.write(0)

# Close the connection to the Arduino
board.exit()
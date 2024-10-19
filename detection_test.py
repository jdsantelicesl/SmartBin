import cv2
from ultralytics import YOLO
from pyfirmata import Arduino, util
import time
import os
from dotenv import load_dotenv

load_dotenv()

# Initialize Arduino and specify the COM port (replace with your port)
board = Arduino(os.getenv("PORT"))

# Define pins for each action
pin_can = board.get_pin('d:9:o')  # Digital pin 9, output mode (e.g., LED for 'Can')
pin_paper = board.get_pin('d:10:o')  # Digital pin 10, output mode (e.g., LED for 'Paper')
pin_cap = board.get_pin('d:11:o')  # Digital pin 11, output mode (e.g., LED for 'Plastic Bottle Cap')

# Load your custom YOLO model, replace with Trash Detection Model
model = YOLO('inference/trash-detection.pt') 

# Access the webcam
cap = cv2.VideoCapture(0)

if not cap.isOpened():
    print("Error: Webcam not detected.")
    exit()

while True:
    ret, frame = cap.read()

    if not ret:
        print("Failed to grab frame")
        break

    # Perform object detection on the frame using your custom model
    results = model(frame)

    # Check if results are not empty
    if results:
        for result in results[0].boxes:
            class_id = int(result.cls)
            confidence = result.conf.item()  # Confidence score

            # Separate if statements for each class and control the corresponding Arduino pin
            if class_id == 1:  # Can
                print(f"Detected CAN with confidence {confidence:.2f}")
                pin_can.write(1)  # Turn on the pin (e.g., LED on)
                time.sleep(2)     # Wait for 2 seconds
                pin_can.write(0)  # Turn off the pin

            if class_id == 5:  # Paper
                print(f"Detected PAPER with confidence {confidence:.2f}")
                pin_paper.write(1)  # Turn on the pin (e.g., LED on)
                time.sleep(2)       # Wait for 2 seconds
                pin_paper.write(0)  # Turn off the pin

            if class_id == 7:  # Plastic bottle cap
                print(f"Detected PLASTIC BOTTLE CAP with confidence {confidence:.2f}")
                pin_cap.write(1)  # Turn on the pin (e.g., LED on)
                time.sleep(2)     # Wait for 2 seconds
                pin_cap.write(0)  # Turn off the pin

    # Display the frame (optional, can be removed if no display needed)
    cv2.imshow('Custom YOLO Object Detection', frame)

    # Press 'q' to break the loop and stop the program
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()

# Close the connection to the Arduino board
board.exit()

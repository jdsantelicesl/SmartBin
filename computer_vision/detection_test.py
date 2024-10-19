# Basic Computer Vision using YoloV8

import cv2
from ultralytics import YOLO

# Load your custom YOLO model
model = YOLO('yolov8s.pt')  # Replace with the path to your custom model

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

    # Initialize variables for tracking the main person
    main_person = None
    highest_confidence = 0

    # Iterate through detected boxes
    # 1: can
    # 5: paper
    # 7: plastic bottle cap
    print("results: ", results)
    if results:
        for result in results[0].boxes:
            # Check if the detected object is a person (adjust class index if needed)
            if result.cls == 0:  
                confidence = result.conf  # Confidence score
                if confidence > highest_confidence:
                    highest_confidence = confidence
                    main_person = result  # Update the main person if higher confidence is found

        # Draw the main person if detected
        if main_person is not None:
            x1, y1, x2, y2 = map(int, main_person.xyxy[0])  # Get bounding box coordinates
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)  # Draw rectangle
            cv2.putText(frame, f'Person: {highest_confidence.item():.2f}', (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

        # Display the frame
        cv2.imshow('Custom YOLO Object Detection', frame)

    # Press 'q' to break the loop and stop the program
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()
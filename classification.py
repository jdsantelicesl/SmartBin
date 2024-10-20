from ultralytics import YOLO
import cv2

# Load the YOLOv11 classification model
model = YOLO('inference/garbage_classification.pt')

# Open the webcam
cap = cv2.VideoCapture(0)

while True:
    # Read a frame from the webcam
    ret, frame = cap.read()
    if not ret:
        break

    # Perform classification
    results = model(frame)

    # Get the top predicted class and its confidence
    top_prediction = results[0].probs.top1
    confidence = results[0].probs.top1conf.item()

    # Get the class name
    class_name = model.names[top_prediction]

    # Display the result on the frame
    cv2.putText(frame, f"{class_name}: {confidence:.2f}", (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Show the frame
    cv2.imshow('YOLOv11 Classification', frame)

    # Break the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close windows
cap.release()
cv2.destroyAllWindows()
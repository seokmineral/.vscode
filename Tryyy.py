import streamlit as st
from PIL import Image
import numpy as np
import cv2
import joblib
import datetime
import json
import os

st.markdown("""
    <style>
        .stApp {
            background-image: url('Aid.png'); /* Path to your image */
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            margin: 0;
        }
    
    /* Title and headers */
    .title {
        color: #800000; /* Dark red */
        text-align: center;
        font-size: 2.5em;
        font-weight: bold;
    }
    .header {
        color: #002147; /* Dark blue */
        font-size: 1.8em;
        font-weight: bold;
        margin-top: 20px;
    }
    
    /* Navigation container */
    .nav-container {
        background-color: #002147; /* Dark blue */
        border-radius: 10px;
        padding: 20px;
        color: white;
        margin-bottom: 20px;
    }
    .nav-container h2 {
        color: white;
        font-size: 1.5em;
    }
    .nav-container label {
        color: white;
        font-size: 1.2em;
    }
    .stButton > button {
        background-color: #800000; /* Dark red */
        color: white;
        font-size: 16px;
        font-weight: bold;
        border-radius: 10px;
        padding: 10px 20px;
        border: none;
    }
    .stButton > button:hover {
        background-color: #002147; /* Dark blue */
        color: white;
    }
    
    /* Footer */
    footer {
        color: #800000;
        text-align: center;
        font-weight: bold;
        margin-top: 30px;
    }
    </style>
""", unsafe_allow_html=True)

# Load the trained model
model = joblib.load('model/wound_detection_model.pkl')  

# Initialize history in session state
if 'history' not in st.session_state:
    st.session_state.history = []

# Preprocess image function
def preprocess_image(image, target_size=(433, 433), expected_features=187500):
    """
    Preprocess the input image to ensure it matches the model's expected input size.
    :param image: Input image (PIL or NumPy array).
    :param target_size: Tuple (width, height) for resizing the image.
    :param expected_features: Expected number of features for the model.
    :return: Preprocessed image as a flattened 1D NumPy array with exact feature count.
    """
    # Convert image to NumPy array if it's not already
    img = np.array(image)

    # Convert to grayscale if the image is in RGB or other format
    if len(img.shape) == 3: 
        img = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)

    # Resize the image to match the target size
    img_resized = cv2.resize(img, target_size)

    # Flatten the image into a 1D array
    img_flattened = img_resized.flatten()

    # Handle mismatches in feature size by padding or cropping
    current_features = img_flattened.shape[0]
    if current_features < expected_features:
        # Pad with zeros if there are too few features
        padding = expected_features - current_features
        img_flattened = np.pad(img_flattened, (0, padding), mode='constant')
    elif current_features > expected_features:
        # Crop excess features if there are too many
        img_flattened = img_flattened[:expected_features]

    # Reshape to match the model's expected input
    img_reshaped = img_flattened.reshape(1, -1)

    return img_reshaped

WOUND_TYPE_MAPPING = {
    0: "Abrasions",
    1: "Bruises",
    2: "Burns",
    3: "Cut",
    4: "Diabetic Wounds",
    5: "Laceration",
    6: "Normal",
    7: "Pressure Wounds",
    8: "Surgical Wounds",
    9: "Venous Wounds" 
}

def predict_wound(image):
    """
    Predict the class and confidence for a given wound image.
    :param image: Input image (PIL or NumPy array).
    :return: Predicted wound type and confidence score.
    """
    preprocessed = preprocess_image(image, target_size=(433, 433))
    prediction = model.predict(preprocessed)[0] 
    confidence_scores = model.decision_function(preprocessed)

    # Select the maximum confidence score (assumes binary or multi-class classification)
    confidence = max(confidence_scores) if confidence_scores.ndim == 1 else max(confidence_scores[0])

    # Map the numeric prediction to the wound type
    wound_type = WOUND_TYPE_MAPPING.get(prediction, "Unknown")  # Default to "Unknown"

    return wound_type, confidence

# Define the path for saving history
history_file = "prediction_history.json"

# Load history from file if it exists
if os.path.exists(history_file):
    try:
        with open(history_file, "r") as f:
            st.session_state.history = json.load(f)
    except json.JSONDecodeError:
        st.session_state.history = []  
else:
    st.session_state.history = []

def add_to_history(source, wound_type, confidence):
    if isinstance(confidence, (np.ndarray, list, tuple)):
        confidence = float(confidence[0] if isinstance(confidence, (list, tuple)) else confidence.item())
    else:
        confidence = float(confidence)  
    
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Add record
    record = {"source": source, "type": wound_type, "confidence": confidence, "timestamp": timestamp}
    st.session_state.history.append(record)

    # Save to file
    with open(history_file, "w") as f:
        json.dump(st.session_state.history, f)

# App Title
st.markdown('<div class="title">LSPU San Pablo Campus - Red Cross Wound Detection Application</div>', unsafe_allow_html=True)

# Login Page
if 'logged_in' not in st.session_state or not st.session_state.logged_in:
    st.subheader("Please log in to access the system")
    user_type = st.radio("Login as:", ["CRCY Member", "Nurse"])
    email = st.text_input("Email")
    password = st.text_input("Password", type="password")

    if st.button("Log In"):
        if email and password:
            st.session_state.logged_in = True
            st.session_state.user_type = user_type
            st.success(f"Logged in as {user_type}")
        else:
            st.error("Please enter both email and password.")

# Navigation Options (Home is always visible)
else:
    st.markdown('<div class="nav-container">', unsafe_allow_html=True)
    st.markdown('<h2>DETECT NOW</h2>', unsafe_allow_html=True)
    options = st.radio("Choose an option:", ["Home", "Upload Image", "Use Camera", "History", "About"])
    st.markdown('</div>', unsafe_allow_html=True)

    # Home Page
    if options == "Home":
        st.markdown('<div class="header">Welcome to the Wound Detection System</div>', unsafe_allow_html=True)
        st.image("Aid.png", caption="LSPU Red Cross Wound Detection", use_container_width=True)
        st.write("""
        This system enables CRCY members to upload or capture images of wounds for analysis. Navigate using the sidebar to get started.
        """)

    # Upload Image Page
    elif options == "Upload Image":
        st.markdown('<div class="header">Upload an Image</div>', unsafe_allow_html=True)
        uploaded_file = st.file_uploader("Choose an image file (JPG, JPEG, PNG):", type=["jpg", "jpeg", "png"])
        if uploaded_file is not None:
            image = Image.open(uploaded_file)
            st.image(image, caption="Uploaded Image", use_container_width=True)

            # Predict wound type
            wound_type, confidence = predict_wound(image)
            st.write(f"Predicted Wound Type: **{wound_type}**")
            st.write(f"Confidence Level: **{confidence:.2f}%**")

            # Add to history with date and time
            add_to_history("Upload", wound_type, confidence)

    # Use Camera Page
    elif options == "Use Camera":
        st.markdown('<div class="header">Capture an Image</div>', unsafe_allow_html=True)
        captured_file = st.camera_input("Take a picture")
        if captured_file is not None:
            image = Image.open(captured_file)
            st.image(image, caption="Captured Image", use_container_width=True)

            # Predict wound type
            wound_type, confidence = predict_wound(image)
            st.write(f"Predicted Wound Type: **{wound_type}**")
            st.write(f"Confidence Level: **{confidence:.2f}%**")

            # Add to history with date and time
            add_to_history("Upload", wound_type, confidence)

    # History Page
    elif options == "History":
        st.markdown('<div class="header">Prediction History</div>', unsafe_allow_html=True)
        if st.session_state.history:
            for record in st.session_state.history:
                confidence = float(record.get('confidence', 0.0))
                timestamp = record.get('timestamp', "Unknown Time")
                st.write(f"Source: {record['source']}," f"Wound: {record['type']}," f"Confidence: {confidence:.2f}%," f"Time: {timestamp}")
        else:
            st.write("No predictions yet.")

    # About Page
    elif options == "About":
        st.markdown('<div class="header">About the Application</div>', unsafe_allow_html=True)
        st.write("""
            This application assists CRCY members and nurses at LSPU in identifying and classifying wounds. It uses AI to provide
            accurate wound detection and first aid recommendations, improving emergency response capabilities.
        """)
# Footer
st.markdown("""
    <footer>
        LSPU San Pablo Campus - CRCY Wound Detection Application © 2024
    </footer>
""", unsafe_allow_html=True)
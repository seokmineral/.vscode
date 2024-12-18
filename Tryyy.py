import streamlit as st
from PIL import Image

# App title
st.title("LSPU San Pablo Campus - Red Cross Wound Detection Application")

# App subtitle
st.write("""
This application helps CRCY members and school nurses at LSPU San Pablo Campus to upload or capture images of wounds 
for detection, classification, and first aid guidance.
""")

# Sidebar for navigation
st.sidebar.title("Navigation")
options = st.sidebar.radio("Choose an option:", ["Home", "Upload Image", "Use Camera", "About"])

# Home page
if options == "Home":
    st.image("wound_detection_banner.jpg", caption="Red Cross Wound Detection", use_column_width=True)
    st.write("""
    Welcome to the LSPU San Pablo Campus - Red Cross Wound Detection Application! This tool allows users to 
    upload wound images or capture them using a camera for AI-powered analysis and guidance.
    """)
    st.write("Use the sidebar to navigate through the app.")

# Upload Image feature
elif options == "Upload Image":
    st.header("Upload an Image")
    uploaded_file = st.file_uploader("Choose an image file", type=["jpg", "jpeg", "png"])
    
    if uploaded_file is not None:
        # Display uploaded image
        image = Image.open(uploaded_file)
        st.image(image, caption="Uploaded Image", use_column_width=True)
        st.write("Image uploaded successfully!")
        
        # Placeholder for wound classification (replace with actual ML model prediction later)
        st.write("Analyzing image...")
        st.success("Wound classification: **Minor Abrasion** (Example)")

# Use Camera feature
elif options == "Use Camera":
    st.header("Capture an Image")
    captured_file = st.camera_input("Take a picture")
    
    if captured_file is not None:
        # Display captured image
        image = Image.open(captured_file)
        st.image(image, caption="Captured Image", use_column_width=True)
        st.write("Image captured successfully!")
        
        # Placeholder for wound classification (replace with actual ML model prediction later)
        st.write("Analyzing image...")
        st.success("Wound classification: **Deep Cut** (Example)")

# About page
elif options == "About":
    st.header("About the Application")
    st.write("""
    The **LSPU San Pablo Campus - Red Cross Wound Detection Application** is a project developed to support 
    the College Red Cross Youth (CRCY) and school nurses. This tool uses machine learning to detect and classify wounds 
    based on uploaded or captured images, providing first aid recommendations to improve response time in emergencies.
    """)
    st.write("For any questions or feedback, please contact the project team at LSPU.")

# Footer
st.sidebar.info("LSPU San Pablo Campus - CRCY Wound Detection © 2024")

import streamlit as st
from PIL import Image

# Custom CSS for styling
st.markdown("""
    <style>
    /* Apply background color to the entire page */
    body {
        background-color: #d68e91; /* Light red with a touch of dark blue */
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
    /* Sidebar customization */
    .sidebar .sidebar-content {
        background-color: #002147;
        color: white;
    }
    .sidebar h2 {
        color: white;
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

# App Title
st.markdown('<div class="title">LSPU San Pablo Campus - Red Cross Wound Detection Application</div>', unsafe_allow_html=True)

# Login Page
if 'logged_in' not in st.session_state or not st.session_state.logged_in:
    st.subheader("Please log in to access the system")
    user_type = st.radio("Login as:", ["CRCY Member", "Nurse"])
    email = st.text_input("Email")
    password = st.text_input("Password", type="password")

    if st.button("Log In"):
        # For now, just a mock login (use actual authentication in a real app)
        if email and password:
            st.session_state.logged_in = True
            st.session_state.user_type = user_type
            st.success(f"Logged in as {user_type}")
        else:
            st.error("Please enter both email and password.")

# Navigation Options (Home is always visible)
else:
    # Sidebar Navigation
    st.sidebar.title("Navigation")
    options = st.sidebar.radio("Choose an option:", ["Home", "Upload Image", "Use Camera", "About"] if st.session_state.logged_in else ["Home", "About"])

    # Home Page
    if options == "Home":
        st.markdown('<div class="header">Welcome to the Wound Detection System</div>', unsafe_allow_html=True)
        # Image URL
        st.image("https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/315521343_1286913935499808_2237088339918518224_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFEhQP-vVqon_XN3QFXj5kGUzsmzgH2SRNTOybOAfZJEwp5qvULJPhEJFuVs8V8OQ8CxX_kgj6D42BKjL6q_8Mc&_nc_ohc=Svu1t2pn_2kQ7kNvgF5oYAY&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=AjN3wHlBQ8fMBS4gIlQtB5k&oh=00_AYACQMfnSoAJILa-IQNcWRBOl8vkBwFE-ZeP6midFWai-Q&oe=6768C3A4", caption="LSPU Red Cross Wound Detection", use_container_width=True)
        st.write("""
        This system enables CRCY members to upload or capture images of wounds for analysis. The app uses machine learning 
        to detect the type of wound and suggests first aid steps. Navigate using the sidebar to get started.
        """)

    # Upload Image Page (Only visible after login)
    elif options == "Upload Image" and st.session_state.logged_in:
        st.markdown('<div class="header">Upload an Image</div>', unsafe_allow_html=True)
        uploaded_file = st.file_uploader("Choose an image file (JPG, JPEG, PNG):", type=["jpg", "jpeg", "png"])
        if uploaded_file is not None:
            # Display uploaded image
            image = Image.open(uploaded_file)
            st.image(image, caption="Uploaded Image", use_container_width=True)
            st.write("Image uploaded successfully!")
            
            # Placeholder for wound classification
            st.write("Analyzing image...")
            st.success("Wound classification: **Minor Abrasion** (Example)")

    # Use Camera Page (Only visible after login)
    elif options == "Use Camera" and st.session_state.logged_in:
        st.markdown('<div class="header">Capture an Image</div>', unsafe_allow_html=True)
        captured_file = st.camera_input("Take a picture")
        if captured_file is not None:
            # Display captured image
            image = Image.open(captured_file)
            st.image(image, caption="Captured Image", use_container_width=True)
            st.write("Image captured successfully!")
            
            # Placeholder for wound classification
            st.write("Analyzing image...")
            st.success("Wound classification: **Deep Cut** (Example)")

    # About Page
    elif options == "About":
        st.markdown('<div class="header">About the Application</div>', unsafe_allow_html=True)
        st.write("""
        The **LSPU San Pablo Campus - Red Cross Wound Detection Application** is designed to assist CRCY members and 
        school nurses in identifying and classifying wounds quickly and accurately. This app leverages machine learning 
        algorithms to provide real-time wound analysis and first aid recommendations, enhancing emergency response efficiency.
        """)

# Footer
st.markdown("""
    <footer>
        LSPU San Pablo Campus - CRCY Wound Detection Application © 2024
    </footer>
""", unsafe_allow_html=True)

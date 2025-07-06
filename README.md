# Email Assistant Chrome Extension

A Chrome extension built with React frontend and Spring Boot backend that enhances your email experience with AI-powered features.

## 🚀 Getting Started

### Prerequisites
- Java 11 or higher
- Maven
- Google Chrome browser
- Google Gemini API key

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

## 🔧 Backend Setup (Spring Boot)

### 1. Navigate to the Spring Boot Project Directory
```bash
cd email-writer-sb  # or wherever your Spring Boot project is located
```

### 2. Configure Google Gemini API Key
1. Open `src/main/resources/application.properties`
2. Add your Google Gemini API key:
```properties
# Google Gemini API Configuration
google.gemini.api.key=YOUR_GEMINI_API_KEY_HERE

# Other application properties
server.port=8080
spring.application.name=email-assistant
```

### 3. Run the Spring Boot Application
```bash
# Using Maven
mvn spring-boot:run

# Or using Maven wrapper
./mvnw spring-boot:run

# Or build and run JAR
mvn clean package
java -jar target/email-assistant-0.0.1-SNAPSHOT.jar
```

The backend server will start on `http://localhost:8080`

## 🎨 Frontend Setup (React)

### 1. Navigate to the React Project Directory
```bash
cd vite-project  # or wherever your React project is located
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the React Application
```bash
npm run build
```

This will create a `build` or `dist` folder containing the compiled Chrome extension files.

## 🌐 Chrome Extension Installation

### 1. Enable Developer Mode
1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Toggle on **"Developer mode"** in the top right corner

### 2. Load the Extension
1. Click **"Load unpacked"** button
2. Select the chrome-extension folder from the project directory
3. The extension should now appear in your Chrome extensions list

### 3. Pin the Extension 
1. Click the puzzle piece icon in Chrome's toolbar
2. Find your extension and click the pin icon to keep it visible

## 📧 Using the Extension

### Getting Started
1. Navigate to your email provider (Gmail(only supporting) etc.)
2. Look for the **Compose** or **Reply** buttons
3. Click on them to start composing an email
4. The extension will automatically integrate with the email interface

### Features
- **AI-Powered Suggestions**: Get intelligent email composition assistance
- **Smart Replies**: Generate contextual responses
- **Email Enhancement**: Improve tone, grammar, and clarity
- **Quick Actions**: Access common email functions quickly

### Usage Tips
- Click the extension icon in your browser toolbar for quick access
- Use the **Compose** button to create new emails with AI assistance
- Use the **Reply** button to generate smart responses to incoming emails
- The extension works seamlessly with your existing email workflow

## 🔧 Development

### Backend Development
- The Spring Boot application runs on port 8080 by default
- API endpoints are available at `http://localhost:8080/api/`
- Hot reload is enabled for development

### Frontend Development
```bash
# Start development server
npm start

# Build for production
npm run build


```

### Chrome Extension Development
- After making changes to the React code, run `npm run build`
- Go to `chrome://extensions/` and click the refresh icon on your extension
- The changes will be reflected immediately

## 🔑 API Key Setup

### Getting Your Google Gemini API Key
1. Visit the [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `application.properties` file

### Security Note
- Never commit your API key to version control
- Consider using environment variables for production deployment
- Keep your API key secure and don't share it publicly



## 🛠️ Troubleshooting

### Common Issues

**Backend won't start:**
- Check if Java is installed: `java -version`
- Ensure port 8080 is available
- Verify your Gemini API key is correctly set

**Extension not loading:**
- Check that Developer mode is enabled in Chrome
- Try refreshing the extension in chrome://extensions/

**API calls failing:**
- Verify your Gemini API key is valid
- Check if the backend server is running
- Ensure there are no CORS issues

### Support
If you encounter any issues, please check the console logs in both the browser developer tools and the Spring Boot application logs.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request


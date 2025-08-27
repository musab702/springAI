# Spring AI Demo Project

A full-stack AI-powered application that demonstrates the capabilities of Spring AI framework with OpenAI integration. This project showcases three main AI features: chat conversations, image generation, and recipe creation.

![Spring AI Demo](https://img.shields.io/badge/Spring%20AI-v1.0.0--M4-brightgreen)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.6-brightgreen)
![React](https://img.shields.io/badge/React-18.0.0-blue)
![Java](https://img.shields.io/badge/Java-23-orange)

## 🚀 Features

### 🤖 AI Chat Assistant
- **Interactive Conversations**: Engage with OpenAI's GPT models through a clean chat interface
- **Configurable Models**: Support for different GPT models (GPT-3.5-turbo with customizable temperature)
- **Real-time Responses**: Get instant AI responses to your queries

### 🎨 AI Image Generation
- **DALL-E Integration**: Generate high-quality images using OpenAI's DALL-E 2 model
- **Customizable Parameters**: 
  - Quality settings (HD/Standard)
  - Multiple image generation (1-4 images)
  - Custom dimensions (width/height)
- **Grid Display**: View generated images in an organized grid layout

### 🍳 AI Recipe Generator
- **Ingredient-Based Recipes**: Create recipes from available ingredients
- **Cuisine Preferences**: Specify preferred cuisine type
- **Dietary Restrictions**: Accommodate various dietary needs and restrictions
- **Detailed Instructions**: Get comprehensive recipes with ingredients list and cooking steps

## 🏗️ Architecture

### Backend (Spring Boot)
```
SpringAiDemo/
├── src/main/java/com/ai/SpringAiDemo/
│   ├── SpringAiDemoApplication.java    # Main application class
│   ├── GenAiController.java            # REST API endpoints
│   ├── ChatService.java                # Chat functionality service
│   ├── ImageService.java               # Image generation service
│   ├── RecipeService.java              # Recipe creation service
│   └── WebConfig.java                  # CORS configuration
└── src/main/resources/
    ├── application.properties          # Main configuration
    └── application-local.properties    # Local development config
```

### Frontend (React)
```
FrontEnd/spring-ai-demo-react/
├── src/
│   ├── App.js                          # Main app component with tab navigation
│   └── components/
│       ├── chat.js                     # Chat interface component
│       ├── ImageGenerator.js           # Image generation component
│       └── RecipieGenerator.js         # Recipe generator component
└── public/                             # Static assets
```

## 🛠️ Tech Stack

### Backend Technologies
- **Java 23** - Latest Java LTS version
- **Spring Boot 3.3.6** - Application framework
- **Spring AI 1.0.0-M4** - AI integration framework
- **Spring Web** - RESTful web services
- **Maven** - Dependency management and build tool

### Frontend Technologies
- **React 18.0.0** - User interface library
- **JavaScript (ES6+)** - Programming language
- **HTML5 & CSS3** - Markup and styling
- **Fetch API** - HTTP client for API calls

### AI & External Services
- **OpenAI GPT Models** - Chat completion
- **OpenAI DALL-E 2** - Image generation
- **Spring AI OpenAI Starter** - Integration layer

### Development Tools
- **Git** - Version control
- **npm** - Frontend package management
- **IntelliJ IDEA / VS Code** - IDEs

## 📋 Prerequisites

Before running this project, ensure you have:

- **Java 23** or higher installed
- **Node.js 16+** and **npm** installed
- **Maven 3.6+** installed
- **OpenAI API Key** (required for AI features)
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd springAI
```

### 2. Backend Setup

#### Configure OpenAI API Key
1. Navigate to the Spring Boot project:
```bash
cd SpringAiDemo
```

2. Create or edit `src/main/resources/application-local.properties`:
```properties
# Add your OpenAI API key
spring.ai.openai.api-key=your-openai-api-key-here
```

#### Run the Backend
```bash
# Using Maven wrapper
./mvnw spring-boot:run

# Or using installed Maven
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 3. Frontend Setup

#### Install Dependencies
```bash
cd FrontEnd/spring-ai-demo-react
npm install
```

#### Start the Frontend
```bash
npm start
```

The frontend will start on `http://localhost:3000`

## 🔧 Configuration

### Backend Configuration

#### Main Configuration (`application.properties`)
```properties
# Server Configuration
server.port=8080
server.servlet.context-path=/api

# Logging Configuration
logging.level.com.ai.SpringAiDemo=DEBUG
logging.level.org.springframework.ai=DEBUG

# CORS Configuration (handled in WebConfig.java)
# Management endpoints
management.endpoints.web.exposure.include=health,info
```

#### Local Development (`application-local.properties`)
```properties
# Local OpenAI API Configuration
spring.ai.openai.api-key=your-local-api-key-here

# Enhanced Logging for Development
logging.level.root=INFO
logging.level.com.ai.SpringAiDemo=DEBUG
```

### Frontend Configuration

The React frontend is configured to communicate with the backend on `localhost:8080`. CORS is properly configured to allow requests from `localhost:3000`.

## 📡 API Endpoints

### Chat Endpoints
- `GET /ask-ai?prompt={text}` - Basic chat completion
- `GET /ask-ai-options?prompt={text}` - Chat with custom options (GPT-3.5-turbo, temperature=0.4)

### Image Generation Endpoints
- `GET /generate-image?prompt={text}&quality={hd|standard}&n={1-4}&width={pixels}&height={pixels}` - Generate images

### Recipe Generation Endpoints
- `GET /recipe-creator?ingredients={text}&cuisine={text}&dietaryRestrictions={text}` - Create recipes

## 🎯 Usage Examples

### Chat with AI
```javascript
// Frontend call
const response = await fetch(`http://localhost:8080/ask-ai-options?prompt=Hello, how are you?`);
const data = await response.text();
```

### Generate Images
```javascript
// Generate 2 HD images of 1024x1024
const response = await fetch(`http://localhost:8080/generate-image?prompt=sunset over mountains&quality=hd&n=2&width=1024&height=1024`);
const imageUrls = await response.json();
```

### Create Recipe
```javascript
// Generate recipe with specific parameters
const response = await fetch(`http://localhost:8080/recipe-creator?ingredients=chicken,rice,vegetables&cuisine=asian&dietaryRestrictions=gluten-free`);
const recipe = await response.text();
```

## 🔒 Security Considerations

- **API Key Protection**: OpenAI API keys are excluded from version control
- **CORS Configuration**: Properly configured for development (localhost:3000)
- **Environment-specific Config**: Separate configuration files for different environments

## 🚧 Development

### Project Structure
```
springAI/
├── SpringAiDemo/                 # Backend Spring Boot application
│   ├── src/main/java/           # Java source code
│   ├── src/main/resources/      # Configuration files
│   ├── src/test/               # Test files
│   └── pom.xml                 # Maven configuration
├── FrontEnd/                   # Frontend applications
│   └── spring-ai-demo-react/   # React frontend
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

### Running in Development Mode

1. **Backend**: The Spring Boot application supports hot reloading with Spring Boot DevTools
2. **Frontend**: React development server provides hot reloading for UI changes

### Adding New Features

1. **Backend**: Add new services in the service layer and expose via controllers
2. **Frontend**: Create new React components and integrate with the tab navigation system

## 🐛 Troubleshooting

### Common Issues

1. **OpenAI API Key Not Working**
   - Verify the API key is correct and has sufficient credits
   - Check that the key is properly set in `application-local.properties`

2. **CORS Errors**
   - Ensure the backend is running on port 8080
   - Verify CORS configuration in `WebConfig.java`

3. **Frontend Connection Issues**
   - Check that backend APIs are accessible at `http://localhost:8080`
   - Verify network connectivity between frontend and backend

### Logs and Debugging

- Backend logs are available in the console when running with Maven
- Frontend logs are available in the browser console
- Enable DEBUG logging by modifying `application.properties`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Spring AI](https://spring.io/projects/spring-ai) - AI integration framework
- [OpenAI](https://openai.com/) - AI models and APIs
- [React](https://reactjs.org/) - Frontend framework
- [Spring Boot](https://spring.io/projects/spring-boot) - Backend framework



---

**Happy Coding! 🚀**
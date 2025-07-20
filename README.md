# 📱 React Native Tasks

> A sleek and intuitive cross-platform task management application built with React Native and Expo

[![React Native](https://img.shields.io/badge/React%20Native-0.72+-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2049+-black.svg)](https://expo.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://javascript.info/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## 🌟 Overview

React Native Tasks is a modern, cross-platform task management application that helps users organize their daily activities efficiently. Built with React Native and Expo, it provides a seamless experience across both Android and iOS platforms with a clean, intuitive interface.

## ✨ Key Features

### 📝 Task Management
- **Create Tasks**: Add new tasks with detailed descriptions
- **Edit Tasks**: Modify existing tasks on the go
- **Delete Tasks**: Remove completed or unwanted tasks
- **Task Status**: Mark tasks as complete or pending

### 🔍 Smart Search
- **Real-time Search**: Instantly find tasks as you type
- **Filter Results**: Quickly locate specific tasks
- **Dynamic Updates**: Search results update automatically

### 🎨 User Experience
- **Modal Dialogs**: Intuitive task input and editing interface
- **Responsive Design**: Optimized for various screen sizes
- **Cross-platform**: Native performance on both Android and iOS
- **Organized Layout**: Clean, easy-to-navigate task list

### 💾 Data Persistence
- **Local Storage**: Tasks persist between app sessions
- **Async Storage**: Efficient data management
- **Automatic Sync**: Changes saved automatically

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React Native** | Mobile App Framework | 0.72+ |
| **Expo** | Development Platform | SDK 49+ |
| **JavaScript (ES6+)** | Programming Language | Latest |
| **React Hooks** | State Management | Latest |
| **Async Storage** | Local Data Persistence | Latest |
| **Custom Styling** | UI/UX Design | CSS-in-JS |

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- **Node.js** (v16.0 or higher)
- **npm** or **yarn** package manager
- **Expo CLI** (v6.0 or higher)
- **Git** for version control

### Development Environment Setup

**For iOS Development:**
- macOS with Xcode installed
- iOS Simulator

**For Android Development:**
- Android Studio
- Android SDK
- Android Virtual Device (AVD)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Mohammad-Eldabaa/React_native_Tasks.git
cd React_native_Tasks
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Install Expo CLI (if not already installed)

```bash
npm install -g @expo/cli
```

### 4. Start the Development Server

```bash
# Start Expo development server
npx expo start

# Or using yarn
yarn expo start
```

### 5. Run the Application

After starting the development server, you have several options:

**Option A: Using Expo Go App**
1. Install Expo Go on your mobile device
2. Scan the QR code displayed in terminal/browser
3. The app will load on your device

**Option B: Using Simulators/Emulators**
```bash
# For iOS Simulator (macOS only)
npx expo run:ios

# For Android Emulator
npx expo run:android
```

## 📁 Project Structure

```
React_native_Tasks/
├── 📄 App.js                 # Main application component
├── 📁 components/            # Reusable UI components
│   ├── TaskItem.js          # Individual task component
│   ├── TaskList.js          # Task list container
│   ├── TaskModal.js         # Task input/edit modal
│   └── SearchBar.js         # Search functionality
├── 📁 screens/              # Application screens
│   ├── HomeScreen.js        # Main tasks screen
│   └── TaskDetailScreen.js  # Task details view
├── 📁 utils/                # Utility functions
│   ├── storage.js           # AsyncStorage helpers
│   └── taskHelpers.js       # Task manipulation functions
├── 📁 styles/               # Styling files
│   ├── globalStyles.js      # Global style definitions
│   └── componentStyles.js   # Component-specific styles
├── 📁 assets/               # Static assets
│   ├── icons/              # App icons
│   └── images/             # Images and graphics
├── 📄 app.json             # Expo configuration
├── 📄 package.json         # Dependencies and scripts
└── 📄 README.md           # Project documentation
```

## 💻 Usage Guide

### Creating a New Task
1. Tap the "+" (Add) button
2. Enter task title and description in the modal
3. Tap "Save" to add the task to your list

### Deleting Tasks
1. Tap the delete icon in the task
2. Task will be removed from the list

### Marking Tasks Complete
1. Tap the true mark next to any task.
2. Completed tasks will be visually distinguished
3. Toggle status by tapping again



## 📱 Platform-Specific Features

### iOS Specific
- Native iOS gestures and animations
- iOS-style navigation patterns
- Apple Human Interface Guidelines compliance

### Android Specific
- Material Design components
- Android navigation patterns
- Google Material Design Guidelines compliance

## 📊 Performance Optimization

The app implements several performance optimizations:
- **Memoization**: React.memo for expensive components
- **Efficient Storage**: Optimized AsyncStorage operations
- **Minimal Re-renders**: Strategic use of useCallback and useMemo

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test TaskItem.test.js
```

## 🚨 Troubleshooting

### Common Issues

**Metro Bundler Issues:**
```bash
# Clear Metro cache
npx expo start --clear
```

**Package Installation Problems:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Expo CLI Issues:**
```bash
# Update Expo CLI
npm install -g @expo/cli@latest
```

**AsyncStorage Issues:**
```bash
# Clear app data (development only)
npx expo install @react-native-async-storage/async-storage
```


## 👨‍💻 Author

**Mohammad Eldabaa**
- GitHub: [@Mohammad-Eldabaa](https://github.com/Mohammad-Eldabaa)
- Email: [mohammadeldbaa20@gmail.com] 

<div align="center"> <img src="https://github.com/user-attachments/assets/a6bc5351-376a-46cb-be65-3105be9eb81c" width="300" alt="Screenshot 1" /> <br /><br /> <img src="https://github.com/user-attachments/assets/9a5ddcff-dd13-4b8b-aafe-279ba816e3fc" width="300" alt="Screenshot 2" /> <br /><br /> <img src="https://github.com/user-attachments/assets/b2c665c3-3989-44e7-908a-5c89351888fc" width="300" alt="Screenshot 3" /> <br /><br /> <img src="https://github.com/user-attachments/assets/64bbf22f-6f3c-4860-9ac6-8704ed5077ea" width="300" alt="Screenshot 4" /> <br /><br /> <img src="https://github.com/user-attachments/assets/b7757b59-cc8e-4dfe-b653-75bbb52bba9c" width="300" alt="Screenshot 5" /> </div>

<div align="center">

**⭐ Star this repository if you found it useful!**

*Built with ❤️ using React Native and Expo*

</div>

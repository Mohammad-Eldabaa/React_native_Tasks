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

### Editing a Task
1. Tap on any existing task
2. Modify the title or description
3. Save changes to update the task

### Searching Tasks
1. Use the search bar at the top of the screen
2. Type keywords to filter tasks in real-time
3. Clear search to view all tasks

### Deleting Tasks
1. Swipe left on a task (iOS) or long press (Android)
2. Confirm deletion in the prompt
3. Task will be removed from the list

### Marking Tasks Complete
1. Tap the checkbox next to any task
2. Completed tasks will be visually distinguished
3. Toggle status by tapping again

## 🎨 Customization

### Styling
The app uses a modular styling approach. You can customize:

```javascript
// globalStyles.js
export const colors = {
  primary: '#007AFF',
  secondary: '#5AC8FA',
  success: '#34C759',
  warning: '#FF9500',
  danger: '#FF3B30',
  // Add your custom colors
};

export const fonts = {
  regular: 'System',
  bold: 'System-Bold',
  // Add custom fonts
};
```

### Adding New Features
1. Create new components in the `components/` directory
2. Add screens to the `screens/` directory
3. Update navigation if needed
4. Add utility functions to `utils/`

## 📱 Platform-Specific Features

### iOS Specific
- Native iOS gestures and animations
- iOS-style navigation patterns
- Apple Human Interface Guidelines compliance

### Android Specific
- Material Design components
- Android navigation patterns
- Google Material Design Guidelines compliance

## 🔧 Build & Deployment

### Development Build
```bash
# Build for development
npx expo build:android --type apk
npx expo build:ios --type simulator
```

### Production Build
```bash
# Build for production
eas build --platform android
eas build --platform ios
```

### App Store Deployment
```bash
# Submit to app stores
eas submit --platform android
eas submit --platform ios
```

## 📊 Performance Optimization

The app implements several performance optimizations:

- **Lazy Loading**: Components load on demand
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

## 🔮 Roadmap & Future Enhancements

- [ ] **Cloud Synchronization** - Sync tasks across devices
- [ ] **Push Notifications** - Task reminders and alerts
- [ ] **Categories & Tags** - Organize tasks by categories
- [ ] **Dark Mode** - Theme switching functionality
- [ ] **Due Dates** - Task scheduling with calendar integration
- [ ] **Collaboration** - Share tasks with team members
- [ ] **Voice Input** - Add tasks using voice commands
- [ ] **Offline Mode** - Full functionality without internet
- [ ] **Analytics** - Task completion insights
- [ ] **Export/Import** - Backup and restore functionality



## 👨‍💻 Author

**Mohammad Eldabaa**
- GitHub: [@Mohammad-Eldabaa](https://github.com/Mohammad-Eldabaa)
- Email: [mohammadeldbaa20@gmail.com] 


## 📸 Screenshots

> **Note**: Add screenshots of your app here to showcase the user interface and functionality.

```markdown
### Main Task List
![Task List Screenshot](./assets/screenshots/task-list.png)

### Add/Edit Task Modal
![Task Modal Screenshot](./assets/screenshots/task-modal.png)

### Search Functionality
![Search Screenshot](./assets/screenshots/search-feature.png)
```

---

<div align="center">

**⭐ Star this repository if you found it useful!**

*Built with ❤️ using React Native and Expo*

[Report Bug](https://github.com/Mohammad-Eldabaa/React_native_Tasks/issues) · [Request Feature](https://github.com/Mohammad-Eldabaa/React_native_Tasks/issues) · [Ask Question](https://github.com/Mohammad-Eldabaa/React_native_Tasks/discussions)

</div>

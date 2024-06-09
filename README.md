

---

# OfficeComms

OfficeComms is a feature-rich communication app inspired by DingTalk. This app aims to replicate the functionalities of DingTalk while adding new features to enhance productivity and communication within organizations.

## Features

- **User Authentication**
  - Login
  - Sign Up
  - Password Recovery

- **Organization Management**
  - Create Organization
  - Join Organization

- **Workspace**
  - Create Channels
  - Direct Messages

- **Chat Functionalities**
  - Real-time Messaging
  - Real=time Video and Audio calls
  - File Sharing
  - Mention Users
  - Search Messages

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [React Native](https://reactnative.dev/docs/environment-setup)

### Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:Arkutu/ReactNativeTests.git
   cd OfficeComms
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the Expo server:
   ```sh
   npx expo start
   ```

### Running on Device/Emulator

1. Ensure you have an Android/iOS emulator running or connect a physical device.
2. Follow the instructions from the Expo server to run the app on your device/emulator.

## Project Structure

```
OfficeComms/
├── assets/                # Asset files (images, fonts, etc.)
├── components/            # Reusable components
├── navigation/            # Navigation configuration
├── screens/               # Screen components
│   ├── LoginScreen.js
│   ├── HomeScreen.js
│   ├── ForgetPassword.js
│   ├── CreateNewAccount.js
│   ├── CreateOrganization.js
│   ├── OrganizationScreen.js
│   ├── ChatScreen.js      # Chat screen
│   ├── CreateChannelScreen.js # Create channel screen
├── App.js                 # Main application component
├── app.json               # Expo configuration
├── package.json           # Node dependencies and scripts
└── README.md              # Project documentation
```

## Adding New Features

### Adding a New Screen

1. Create a new screen component in the `screens` directory.
2. Add the new screen to the navigation in `App.js`:

   ```javascript
   import NewScreen from './screens/NewScreen';

   // Add to Stack.Navigator in App.js
   <Stack.Screen name="NewScreen" component={NewScreen} />
   ```

### Updating the Navigation

To add a new route or update existing ones, modify the `Stack.Navigator` in `App.js`.

### Styling

Use the `StyleSheet` API provided by React Native to add or update styles for components. Refer to existing styles in the project for guidance.

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/NewFeature
   ```
3. Commit your changes:
   ```sh
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/NewFeature
   ```
5. Create a pull request.


## Acknowledgments

- [DingTalk](https://www.dingtalk.com/) for the inspiration
- [React Native](https://reactnative.dev/) for the framework
- [Expo](https://expo.dev/) for the development platform

---

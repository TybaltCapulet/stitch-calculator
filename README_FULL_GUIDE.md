# Thread Length Calculator

This app helps leatherworkers calculate thread length for stitching projects. Built with React Native and Expo SDK 51.

## Prerequisites

- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/). This will also install npm (Node Package Manager).
- **Git** (optional, for code updates): Download from [git-scm.com](https://git-scm.com/).

## Getting Started

1. **Download the code**
   - If you have Git: Open Terminal and run:
     ```sh
     git clone https://github.com/TybaltCapulet/stitch-calculator.git
     cd stitch-calculator
     ```
   - Or download the ZIP from GitHub and extract it, then open Terminal and `cd` into the folder.

2. **Install Expo CLI**

     ```sh
     npm install -g expo-cli
     ```

3. **Install dependencies**
   - In the project folder, run:
     ```sh
     npm install
     ```

4. **Start the app**
   - Run:
     ```sh
     npx expo start
     ```
   - This will open a browser window. You can run the app on your phone using the Expo Go app (iOS/Android) or in an emulator.

## Running on your phone

- Download the **Expo Go** app from the App Store or Google Play.
- Scan the QR code in your browser after running `npx expo start`.

## Making Changes

- Edit the code in your favorite editor (e.g., VS Code).
- Save changes and the app will reload automatically.

## Maintaining the App

- **Update dependencies**: Run `npm update` regularly.
- **Upgrade Expo SDK**: Follow [Expo upgrade guide](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/).
- **Test on multiple devices**: Use Expo Go and emulators.
- **Check for deprecated APIs**: Review [Expo SDK 51 release notes](https://blog.expo.dev/expo-sdk-51-7e5b6e7e7e7e).

## Troubleshooting

- If you see errors, try:
  - Clearing Expo cache: `npx expo start -c`
  - Checking your Node.js version (should be current LTS).

## Useful Resources
- [Expo Documentation](https://docs.expo.dev/)
- [Expo Forums](https://forums.expo.dev/)

## Contact

For help, open an issue on GitHub or contact the project owner.

---

## Setting Up Your Own Expo Account

1. Go to [expo.dev](https://expo.dev/) and sign up for a free account.
2. After signing up, install the Expo CLI (see above) and log in from your terminal:
   ```sh
   npx expo login
   ```
3. You can now publish your own builds and manage projects from your Expo dashboard.

## Editing Build Variables

- Build variables and configuration are set in `app.json` (or `app.config.js`).
- Common variables to edit:
  - `name`: The app name shown on devices.
  - `slug`: The unique identifier for your app on Expo.
  - `version`: The app version.
  - `owner`: Your Expo username (set this to your own account for managed builds).
  - `ios.bundleIdentifier` and `android.package`: Unique IDs for your app on each platform.
  - `extra.eas.projectId`: Used for EAS Build; generate your own project ID from the Expo dashboard if needed.

### Example: Change Owner and Project ID

1. In `app.json`, update:
   ```json
   "owner": "yourExpoUsername",
   "extra": {
     "eas": {
       "projectId": "your-own-project-id"
     }
   }
   ```
2. You can generate a new project ID by creating a new project on [expo.dev](https://expo.dev/) and copying the ID from the dashboard.

## Building Your Own App

- Use EAS Build for production builds:
  ```sh
  npx eas build --platform android
  npx eas build --platform ios
  ```
- You may need to configure credentials for iOS/Android. Follow the prompts or see the [EAS Build docs](https://docs.expo.dev/build/introduction/).

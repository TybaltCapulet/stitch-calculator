# Thread Length Calculator

This app helps leatherworkers calculate thread length for stitching projects.
Built with React Native and **Expo SDK 57**, built and submitted with EAS Build.

- Android package name: `com.hrackley.stitchcalculator`
- Expo account that owns the project: `hrackley`
- EAS project id: `0a9e48f5-46cb-488d-86c2-39f8630b1030`

## Prerequisites

- **Node.js 20.19.4 or newer**, and on the Node 22 line, 22.13 or newer.
  React Native 0.86 declares `^20.19.4 || ^22.13.0 || ^24.3.0 || >= 25.0.0`, so
  Node 22.0 through 22.12 will *not* work. Node 22 LTS is a good choice — it
  matches the Node version on Expo's own build servers. Get it from
  [nodejs.org](https://nodejs.org/).
- **npm 12 or newer** (`npm install -g npm@12`). Older npm (10.x) resolves
  `expo-asset` into `node_modules/expo/node_modules/` instead of hoisting it,
  and then Metro fails to start with "The required package `expo-asset` cannot
  be found". If you hit that, upgrade npm, delete `node_modules` and
  `package-lock.json`, and run `npm install` again.
- **Git** (optional, for code updates): [git-scm.com](https://git-scm.com/).

You do **not** need to install anything globally for Expo. The old
`npm install -g expo-cli` package is deprecated — the CLI now ships with the
project, and you run it with `npx expo ...` from the project folder.

The EAS Build CLI is not installed globally either. Run it with
`npx eas-cli@latest ...`, which fetches the current version each time. Note that
the npm package is called `eas-cli`, not `eas`: a plain `npx eas ...` will fail,
because there is no such package and this project does not depend on the CLI.

## Getting Started

1. **Download the code**
   - If you have Git:
     ```sh
     git clone https://github.com/TybaltCapulet/stitch-calculator.git
     cd stitch-calculator
     ```
   - Or download the ZIP from GitHub, extract it, and `cd` into the folder.

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the app**
   ```sh
   npx expo start
   ```

## Running on your phone

For a quick look at JavaScript changes, the **Expo Go** app from the App Store
or Google Play can load the project — run `npx expo start` and scan the QR code.
Expo Go only ever supports one SDK version, so this works only while Expo Go is
on SDK 57.

For anything you intend to trust, build the app instead. This project uses
native modules (Reanimated 4, Gesture Handler, Screens) and runs on React
Native's New Architecture, so a real build is the only faithful test:

```sh
npx eas-cli@latest build --platform android --profile preview
```

That produces an installable APK (the `preview` profile is set to internal
distribution) and EAS gives you a link and QR code to install it directly on
the phone.

## Making Changes

- Edit the code in your favourite editor (e.g. VS Code).
- Save, and the running app reloads automatically.
- The two calculators live in `LengthCalculator.js` and `HoleCalculator.js`.
  `styles.js` holds the shared styling.

## Maintaining the App

- **Check the project's health**: `npx expo-doctor`. Do this before every
  release; it catches missing peer dependencies and invalid `app.json` fields.
- **Upgrade the Expo SDK**: one major version at a time, never several at once:
  ```sh
  npx expo install expo@^58.0.0
  npx expo install --fix
  npx expo-doctor
  ```
  Read the release notes for each SDK you pass through, and check the app still
  starts before moving to the next one. The notes are linked from the
  [Expo upgrade guide](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/),
  and each SDK has a changelog at `https://expo.dev/changelog/sdk-<number>`.
- **Releasing**: bump `version` and `android.versionCode` in `app.json`
  (`versionCode` must increase for every upload Google Play accepts), then:
  ```sh
  npx eas-cli@latest build --platform android --profile production
  npx eas-cli@latest submit --platform android
  ```

## Troubleshooting

- Clear the Metro cache: `npx expo start -c`
- Check your Node version: `node --version` (see the supported range under
  Prerequisites)
- Metro can't find `expo-asset`: see the npm 12 note under Prerequisites.
- A clean reinstall fixes most dependency oddities:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

## Useful Resources

- [Expo Documentation](https://docs.expo.dev/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [Expo changelogs](https://expo.dev/changelog)

---

# Handover to a new owner

Three separate things change hands. They are independent, and missing any one of
them will stop the new owner from shipping an update.

## 1. The Android signing key — do this first

Google Play will only accept an update signed with the same key as the existing
app. If this key is lost, the app cannot be updated at all; a new package name
and a new Play listing would be the only way forward.

The key is held by EAS. Export it with:

```sh
npx eas-cli@latest credentials
```

Choose **Android** → the **production** build profile → the keystore, and use
the download/export option. Store the keystore file and its passwords in a
password manager and hand them to the new owner over a secure channel — not
email or chat.

## 2. The Expo / EAS project

Either transfer the existing project or let the new owner create their own.

**Transfer it** (keeps build history and credentials): on
[expo.dev](https://expo.dev/), open the project → **Project settings** →
transfer the project to the new owner's account or organisation. The new owner
needs an Expo account first. Then update `owner` in `app.json` to their account
name.

**Or start fresh under their account**: the new owner creates a project on
expo.dev, then updates `app.json`:

```json
"owner": "theirExpoUsername",
"extra": {
  "eas": {
    "projectId": "their-own-project-id"
  }
}
```

If they go this route they must still import the original keystore from step 1
into their own EAS credentials, or Play will reject the upload.

## 3. The Google Play Console listing

Transferring the Play listing is a Google process, separate from GitHub and
Expo. Either use Google Play's **app transfer** flow to move the app to the new
owner's developer account, or add them as a user on the existing account with
release permissions. See the
[Play Console help on app transfers](https://support.google.com/googleplay/android-developer/answer/6230247).

## What must not change

- **`android.package` must stay `com.hrackley.stitchcalculator`.** This is the
  app's permanent identity on Google Play. Changing it creates a completely new
  app: the existing listing, reviews and installed users do not carry over, and
  existing users get no update.
- `ios.bundleIdentifier` is the same idea on the Apple side.
- `android.versionCode` must only ever go **up**. Play rejects a build whose
  `versionCode` is equal to or lower than one already uploaded.

## Handover checklist

- [ ] Keystore exported via `npx eas-cli@latest credentials` and delivered securely
- [ ] Expo project transferred, or new `owner` + `projectId` set in `app.json`
- [ ] Google Play Console access or app transfer completed
- [ ] GitHub repository transferred or forked to the new owner
- [ ] New owner has run `npm install` and `npx eas-cli@latest build -p android --profile preview`
      successfully on their own machine

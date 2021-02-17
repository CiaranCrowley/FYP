# FYP APP

## Industrial Machinery Test Data Recording App

## Installation Instructions
First, ensure that Node.js is installed and check that its version is above 10 with '$ node -v'.   
If you already have Ionic installed, please uninstall it using the first two commands below.   
** = Explaination

```bash
npm uninstall -g ionic
npm install -g @ionic/cli
cd 'Project Folder'/'App Folder'
ionic integrations enable capacitor
ionic build
ionic cap add ios OR ionic cap add android  **These commands will generate IOS and Android compatible builds of the app.  Both of these can be run
ionic cap copy  **Run this after each build to update your IOS and Android builds with any new code
ionic cap sync  **Run this after each build to update any new native code
npm i --save @codetrix-studio/capacitor-google-auth
ionic cap update
```
## Create OAuth Credentials to allow Google Auth Functionality

## Manual Changes to be made in the Android Build
## Running the app locally

### In a Browser
Runs the app in your default browser.  Add '--browser [browser name]' if you wish to run the app in a different browser
```bash
ionic serve
```

### In Android Studio
```bash
npx cap open android
```

### In Xcode
NOTE:  I have no way of verifying proper functionality on IOS devices as I do not own a device with MAC OS
```bash
npx cap open ios
```

# FYP APP

## Industrial Machinery Test Data Recording App

## Installation Instructions

First, ensure that Node.js is installed and check that its version is above 10 with ```node -v```.
If you already have Ionic installed, please uninstall it using the first two commands below.  
> ** = Explaination  

> Please ensure that you have Node.js instaled and that your npm version is at least 6.14.10

```bash
npm uninstall -g ionic
cd 'Project Folder' \ 'App Folder' E.g. cd C:\Users\user\Documents\FYP\FYP Project\FYP_APP
npm install
ionic integrations enable capacitor
npx cap init
ionic build
npx cap add ios OR npx cap add android  **These commands will generate IOS and Android compatible builds of the app. Both of these can be run
npx cap copy  **Run this after each build to update your IOS and Android builds with any new code
npx cap sync  **Run this after each build to update any new native code
```

***

## Create a .env file in the project folder.

Create a Firebase Project with a Firestore database and configure it approriately.
> Ensure you Firestore Collection is named "data"

In the Project settings, pull the values matching those below.
```bash
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_DATABASE_URL=

```

After doing all this, rebuild the app.

## Running the app locally

### In a Browser

Runs the app in your default browser.  Add '--browser [browser name]' to ionic serve if you wish to run the app in a different browser

```bash
ionic serve
OR
npm run
```

### In Android Studio

```bash
npx cap open android
```

### In Xcode

> NOTE:  I have no way of verifying proper functionality on IOS as I do not own any IOS devices.

```bash
npx cap open ios
```

***

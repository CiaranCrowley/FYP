# FYP APP

## Industrial Machinery Test Data Recording App

# Installation Instructions
First, ensure that Node.js is installed and check that its version is above 10 with '$ node -v'.
If you already have Ionic installed, please uninstall it using the first two commands below
+ $  npm uninstall -g ionic
+ $  npm install -g @ionic/cli
After installing the Ionic CLI, cd to the directory of the project before continuing.
+ $  ionic integrations enable capacitor
+ $  ionic build
+ $  ionic cap add ios OR ionic cap add android  **  These commands will generate IOS and Android compatible builds of the app.  Both of these can be run  **+ $
+ $  ionic cap copy
+ $  ionic cap sync 
+ $  npm i --save @codetrix-studio/capacitor-google-auth
+ $  ionic cap update
+ $
+ $
+ $
+ $

# Running the app locally
<h3>In a Browser</h3>

+ $  ionic serve --browser chrome **  Runs the app in chrome.  Drop '--browser chrome' if you wish to run the app in your default browser  **

<h3>In Android Studio</h3>

+ $  npx cap open android

<h3>In Xcode</h3>

+ $  npx cap open ios
****    NOTE:  I have no way of verifying proper functionality on IOS devices as I do not own a device with MAC OS    ****
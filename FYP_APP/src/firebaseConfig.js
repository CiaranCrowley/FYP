import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"
import { toast } from './toast'

const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
}

firebase.initializeApp(config)
// firebase.firestore()
const db = firebase.database()

// EVERYTHING BELOW WILL BE REMOVED
export async function loginUser(email, password) {
	
	try {
		const res = await firebase.auth().signInWithEmailAndPassword(email, password)
		console.log(res) 
		return true
	} catch(error) {
		toast(error.message, 4000)
		return false
	}
}

export async function registerUser(email, password) {
	try {
		const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
		console.log(res)
		return true
	} catch(error) {
		toast(error.message, 4000)
		return false
	}
}

// export async function submitData(siteName, category, contractNo, tagNo, location, manufacturer, serialNo, voltage, rpm, secure, weatherproof, cableMarked, earthed, installationTestDate, comments) {
// 	const dataRef = db.ref("data")
// 	const newDataRef = dataRef.push()
// 	newDataRef.set({
// 		siteName, category, contractNo, tagNo, location, manufacturer, serialNo, voltage, rpm, secure, weatherproof, cableMarked, earthed, installationTestDate, comments
// 	})
// }

export default firebase;
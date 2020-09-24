import admin from 'firebase-admin';
import * as serviceAccount from '../serviceAccount.json'

export function firebaseSetup() {	
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://vdit-films.firebaseio.com"
	 });
}

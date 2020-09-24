const admin =  require('firebase-admin');
const serviceAccount = require('../serviceAccount.json');

function firebaseSetup() {	
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://vdit-films.firebaseio.com"
	 });
}

module.exports = firebaseSetup;

const admin = require('firebase-admin');
const db = admin.firestore().collection('films');

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Film = {
	async getFilmComment(id) {
		const doc = await db.doc(id).get();

		if (!doc.exists) {
			return [];
		}

		return doc.data().comments || [];
	},

	async addFilmComment(id, comment) {
		const arr = await this.getFilmComment(id);
		arr.unshift({
			text: comment,
			avatar: getRandomInt(1, 9),
		});

		const doc = db.doc(id);
		const data = {
			comments: arr,
		};

		return doc.set(data);
	}
}

module.exports = Film;

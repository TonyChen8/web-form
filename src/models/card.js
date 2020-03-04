var card = null;

export default class Card {
	static create(data = {}) {
		card = new Card(data);
	}
	static get() {
		return card;
	}

	constructor({ name = "", number = "", month = "", year = "", CVV = 0 }) {
		this.name = name;
		this.number = number;
		this.expireMonth = month;
		this.expireYear = year;
		this.CVV = CVV;
	}
	getName() {
		return this.name;
	}
	getNumber() {
		return this.number;
	}
	getExpireDateMonth() {
		return this.expireMonth;
	}
	getExpireDateYear() {
		return this.expireYear;
	}
	getCVV() {
		return this.CVV;
	}
}

var form = null;

export default class Form {
	static create(data = {}) {
		form = new Form(data);
	}
	static get() {
		return form;
	}

	constructor({ name = "", email = "", phone = "", amount = 0 }) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.amount = amount;
	}
	getName() {
		return this.name;
	}
	getEmail() {
		return this.email;
	}
	getPhone() {
		return this.phone;
	}
	getAmount() {
		return this.amount;
	}
}

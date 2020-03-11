var student = null;

const baseurl = "http://192.168.1.119:8000/api/staging";

const post = async (url, payload) => {
	let res = await fetch(`${baseurl}${url}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"Cache-Control": "no-cache",
			Pragma: "no-cache"
		},
		body: JSON.stringify(payload)
	});

	if (res && res.ok) {
		let data = await res.json();
		return data;
	}
	return null;
};

export default class Student {
	static create(data = {}) {
		student = new Student(data);
		return student;
	}
	static get() {
		return student || new Student({});
	}

	constructor({
		id = "",
		dob = "",
		name = "",
		phone = "",
		countryCode = 0,
		verifyId = "",
		lastname = "",
		status = "",
		universityStatus = "",
		ceremonyId = "",
		ceremonyName = "",
		verifyCode = ""
	}) {
		this.id = id;
		this.dob = dob;
		this.name = name;
		this.phone = phone;
		this.countryCode = countryCode;
		this.verifyId = verifyId;
		this.lastname = lastname;
		this.status = status;
		this.universityStatus = universityStatus;
		this.ceremonyId = ceremonyId;
		this.ceremonyName = ceremonyName;
		this.verifyCode = verifyCode;
	}

	async login() {
		let data = await post("/login", { student_id: this.id, dob: this.dob });

		if (data) {
			this.verifyId = data.id;
			this.lastname = data.lastname;
			this.name = data.name;
			this.status = data.status;
			this.universityStatus = data.uni_status;
			this.ceremonyId = data.ceremony_id;
			this.ceremonyName = data.ceremony.name;
			return this;
		}
		return false;
	}

	async getVerifyCode() {
		let res = await post("/getCode", {
			countrycode: this.countryCode,
			number: this.phone,
			student_id: this.id
		});
		if (res) {
			this.verifyCode = res.code;
			return res.code;
		}
		return null;
	}

	async matchVerifyCode(code) {
		let res = await post("/verifyCode", {
			code: code,
			countrycode: this.countryCode,
			number: this.phone,
			id: this.verifyId
		});
		if (res) {
			return res;
		}
		return null;

		return this.verifyCode === (code || "").toString().trim();
	}
	getId() {
		return this.id;
	}
	getDob() {
		return this.dob;
	}
	getName() {
		return this.name;
	}

	getPhone() {
		return this.phone;
	}
	setPhone(phone) {
		this.phone = phone;
	}
	getCountryCode() {
		return this.countryCode;
	}
	setCountryCode(countryCode) {
		this.countryCode = countryCode;
	}

	getVerifyId() {
		return this.verifyId;
	}
	getLastname() {
		return this.lastname;
	}
	getStatus() {
		return this.status;
	}
	getUniversityStatus() {
		return this.universityStatus;
	}

	getCeremonyName() {
		return this.ceremonyName;
	}
	canGraduate() {
		return this.universityStatus === "Graduate";
	}
}

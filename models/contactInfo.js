class ContactInfo {
    get zip() {
        return this._zip;
    }

    set zip(value) {
        this._zip = value;
    }
    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }
    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }
    get street() {
        return this._street;
    }

    set street(value) {
        this._street = value;
    }
    get company() {
        return this._company;
    }

    set company(value) {
        this._company = value;
    }
    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
    get memberId() {
        return this._memberId;
    }

    set memberId(value) {
        this._memberId = value;
    }
    constructor(data) {
        this._memberId = data['memberId'];
        this._email = data['email'];
        this._phone = data['phone'];
        this._company = data['company'];
        this._street = data['street'];
        this._city = data['city'];
        this._state = data['state'];
        this._zip = data['zip'];
    }
}

module.exports = ContactInfo;

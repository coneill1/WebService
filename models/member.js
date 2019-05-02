const GENDER = {
    male: 'male',
    female: 'female'
};

class Member {
    get membershipId() {
        return this._membershipId;
    }

    set membershipId(value) {
        this._membershipId = value;
    }
    get specialAccommodation() {
        return this._specialAccommodation;
    }

    set specialAccommodation(value) {
        this._specialAccommodation = value;
    }
    get ethnicity() {
        return this._ethnicity;
    }

    set ethnicity(value) {
        this._ethnicity = value;
    }
    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }
    get ageRangeHigh() {
        return this._ageRangeHigh;
    }

    set ageRangeHigh(value) {
        this._ageRangeHigh = value;
    }
    get ageRangeLow() {
        return this._ageRangeLow;
    }

    set ageRangeLow(value) {
        this._ageRangeLow = value;
    }
    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }
    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    constructor(data) {
        this._id = data['memberId'] || data['id'];
        this._firstName = data['firstName'];
        this._lastName = data['lastName'];
        this._ageRangeLow = data['ageRangeLow'];
        this._ageRangeHigh = data['ageRangeHigh'];
        this._gender = data['gender'];
        this._ethnicity = data['ethnicity'];
        this._specialAccommodation = data['specialAccommodation'];
        this._membershipId = data['membershipId'];
    }
}

module.exports = Member;

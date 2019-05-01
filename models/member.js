const GENDER = {
    male: 'male',
    female: 'female'
};

class Member {
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

    get id() {
        return this._id
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get ageRangeLow() {
        return this._ageRangeLow;
    }

    get ageRangeHigh() {
        return this._ageRangeHigh;
    }

    get gender() {
        return this._gender;
    }

    get ethnicity() {
        return this._ethnicity;
    }

    get specialAccommodation() {
        return this._specialAccommodation;
    }

    get membershipId() {
        return this._membershipId;
    }
}

module.exports = Member;

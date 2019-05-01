class ContactInfo {
    constructor(data) {
        this.email = data['email'];
        this.phone = data['phone'];
        this.company = data['company'];
        this.street = data['street'];
        this.city = data['city'];
        this.state = data['state'];
        this.zip = data['zip'];
    }
}

module.exports = ContactInfo;

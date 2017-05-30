import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
    // This model should have the attributes for
    // a single contact: name, phone number, and email.

    defaults: {
        name: '',
        phoneNumber: 0,
        email: ''
    }
});

export default Contact;

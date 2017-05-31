import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  default: {
    "name": "test name",
    "phone": "555-5555",
    "email": "person@earth.com"
  }
});

export default Contact;

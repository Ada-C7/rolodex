import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    "name": "",
    "phone number": "",
    "email": ""
  }
});

export default Contact;

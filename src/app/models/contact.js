import Backbone from 'backbone';

const Contact = Backbone.Model.extend({

  defaults: {
    "name": "enter name",
    "phone_number": "enter phone number",
    "e-mail": "enter email"
  }
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});

export default Contact;

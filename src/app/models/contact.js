import Backbone from 'backbone';

const Contact = Backbone.Model.extend({

  defaults: {
    "name": "enter name",
    "phone": "enter phone number",
    "email": "enter email"
  }
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});

export default Contact;

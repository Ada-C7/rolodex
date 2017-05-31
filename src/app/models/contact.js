import Backbone from 'backbone';

var Contact = Backbone.Model.extend({
  defaults: {
    "name": "",
    "email": "",
    "phone": "000-000-0000"
  }

  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});

export default Contact;

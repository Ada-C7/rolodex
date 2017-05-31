import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    "name": "",
    "email": "",
    "phone": "000-000-0000"
  }
});


export default Contact;

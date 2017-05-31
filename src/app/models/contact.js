import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

  defaults: {
    "name": "Insert Name",
    "phone number": "Insert Phone Num",
    "email": "Insert Email"
  }
});

export default Contact;

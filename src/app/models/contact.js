import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    "name": "John Smith",
    "email": "email@email.com",
    "phone": "123-456-7890",
  }
});

export default Contact;

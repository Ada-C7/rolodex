import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    "name": "John Smith",
    "email": "email@email.com",
    "phone": "123-456-7890",
  },
  logStatus: function() {
    console.log("Name: " + this.get("name"));
    console.log("email: " + this.get("email"));
    console.log("phone: " + this.get("phone"));
  }
});

export default Contact;

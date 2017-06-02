import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: '',
    phone: '',
    email: ''
  },
  logStatus: function() {
    console.log("Name " + this.cid);
    console.log("Phone: " + this.get("phone"));
    console.log("Email: " + this.get("email"));
  },
  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  },
  toggleComplete: function() {
    this.get("canceled");
    this.set("canceled", !canceled);
  }
});

export default Contact;

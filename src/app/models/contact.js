import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: 'Default',
    phone: '',
    email: ''
  },

  logStatus: function() {
    console.log("Model: " + this.cid);
    console.log("Name: " + this.get("name"));
    console.log("Phone: " + this.get("phone"));
    console.log("Email: " + this.get("email"));
  },

  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  }
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});

export default Contact;

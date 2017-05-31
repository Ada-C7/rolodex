import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "It's a me",
    email: "me@me.com",
    phone: "XXX-XXX-XXXX"
  },
  logStatus: function() {
    console.log("Model" + this.cid);
    console.log("Name " + this.get("name"));
    console.log("Email " + this.get("email"));
    console.log("Phone " + this.get("phone"));
  },
  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  }
});

export default Contact;

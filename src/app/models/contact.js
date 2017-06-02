import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
    defaults: {
      name: 'DEFAULT',
      email: "",
      phone: ""
    },
    logStatus: function() {
      console.log("Model " + this.cid);
      console.log("Name: " +   this.get("name"));
      console.log("email: " + this.get("email"));
      console.log("phone: " + this.get("phone"));
    },
    initialize: function(params) {
      console.log("Starting", params);
      this.logStatus();
    },
});

export default Contact;

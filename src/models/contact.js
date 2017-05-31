// contact.js
import Backbone from 'backbone';

var Contact = Backbone.Model.extend({
  defaults: {
    name: "MYSTERY CONTACT",
    email: "***@*****.***",
    phone: "*** *** ****"
  },
  logStatus: function() {
    console.log("Model " + this.cid);
    console.log("Name: " + this.get("name"));
    console.log("Eamil: " + this.get("email"));
    console.log("Phone: " + this.get("phone"));
  },
  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  }
});

export default Contact;

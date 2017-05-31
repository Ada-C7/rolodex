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
    console.log("Model " + this.cid);
    // never get attributes directly!!!
    // bad: this.attributes.title
    // use this.get("title") always
    console.log("Name " + this.get("name"));
    console.log("Phone " + this.get("phone"));
    console.log("Name " + this.get("email"));
  },
  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  }
});

export default Contact;

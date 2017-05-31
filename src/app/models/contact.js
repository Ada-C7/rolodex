import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "-",
    phone: "-",
    email: "-"
  },

  initialize: function(params) {
    console.log("Task initialized: " + this.get("name"));
    // to see what params looks like
    console.log(params);
  },

  logStatus: function() {
    console.log("Contact: " + this.get("name"));
  }
});

export default Contact;

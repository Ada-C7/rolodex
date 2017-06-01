import Backbone from 'backbone';

const Contact = Backbone.Model.extend({

  defaults: {
    name: 'NAME',
    phone: '555-555-5555',
    email: 'hello@hello.org'
  },

  logStatus: function() {
    console.log("Model: " + this.cid);
    console.log("Name: " + this.get("name"));
    console.log("Phone: " + this.get('phone'));
    console.log("Email: " + this.get('email'));
  },

  initialize: function(params) {
    console.log("Starting", params);
    this.logStatus();
  }
});

export default Contact;

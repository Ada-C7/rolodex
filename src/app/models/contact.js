import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "It's a me",
    email: "me@me.com",
    phone: "XXX-XXX-XXXX"
  },
  initialize: function(params) {
    console.log("Starting", params);
  }
});

export default Contact;

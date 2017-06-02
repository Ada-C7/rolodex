import Backbone from 'backbone';

// This model represents a single contact
//this is the model Contact
const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    "name": "A test name",
    "email": "An Email address",
    "phone_number": "A phone number"
  },

  initialize: function(params) {
    console.log("Contact initialized:" + this.get("name"));
    console.log(params);
  },

  logStatus: function() {
    console.log("Name: " + this.get("name"));
  }
  //do I need a toggle complete here??

});

export default Contact;


// Have a single instance of Contact created from static data.
// Render the instance of contact using an Underscore Template

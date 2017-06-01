import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    "name": "Bob Fred",
    "email": "things@stuff.com",
    "phone": "206-call-fred"
  },
  initialize: function(params) {

  },
  toggleModal: function() {
    console.log("Modal af")
  }
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});

export default Contact;

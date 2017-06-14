import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    "name": "Bob Fred",
    "email": "things@stuff.com",
    "phone": "206-call-fred"
  },
  initialize: function(params) {

  }
});

export default Contact;

import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    'name': '',
    'phone_num': '',
    'email': ''
  },

  validate: function(attrs) {
    if(!attrs.name) {
      return 'Please enter a name';
    }
  }
});

export default Contact;

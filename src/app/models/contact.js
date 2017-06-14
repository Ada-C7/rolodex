import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: 'Default',
    phone: 'Default',
    email: 'Default'
  },
  initialize: function(params) {
    console.log("Starting", params);
  }
});

export default Contact;

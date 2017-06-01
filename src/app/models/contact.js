import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: '',
    phoneNumber: '',
    email: ''
  }
});

export default Contact;

import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: 'New Contact'
  }
});

export default Contact;

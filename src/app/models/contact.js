import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "unknown name",
    email: "unknown email",
    number: "unknown digits"
  }
});

export default Contact;

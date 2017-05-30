import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "It's a me",
    phone: "333-777-8888",
    email: "me@me.com"
  }
});

export default Contact;

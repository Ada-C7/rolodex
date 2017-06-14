import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    "name": "friend's name",
    "email": "frined's email",
    "phone": "friend's phone number"
  }
});

export default Contact;

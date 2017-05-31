import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
  "name": "Name",
  "e_mail": "E-mail address",
  "phone_number": "Phone number"
}
});

export default Contact;

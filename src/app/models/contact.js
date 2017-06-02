import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  updateContact: function(params) {
    console.log(params);
    this.set({
      name: params.name,
      email: params.email,
      phone: params.phone
    });
  }
});

export default Contact;

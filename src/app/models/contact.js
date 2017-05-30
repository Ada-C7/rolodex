import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: { // THIS IS FOR DEFAULT TASK, when we creating new task witouht attributes
    name: "Default name",
    phone: "Default phone number",
    email: "Default email"
  }
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});

export default Contact;

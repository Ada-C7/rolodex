import Backbone from 'backbone';

var Contact = Backbone.Model.extend(
  {
    defaults: {
      name: "name",
      email: "email",
      phone: "867-5309"
    }
  }
);

export default Contact;

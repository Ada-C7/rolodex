import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Someone awesome",
    email: "nobody@bestemailever.com",
    phone: "00000000000"
  }
});

export default Contact;

import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Someone awesome",
    email: "nobodys@bestemailever.com",
    phone: ""
  },
  logStatus: function() {
    console.log("Name: " + this.get("name"));
    console.log("Email: " + this.get("email"));
    console.log("Phone: " + this.get("phone"));
  }
});

export default Contact;

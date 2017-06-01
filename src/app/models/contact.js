import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: { // THIS IS FOR DEFAULT TASK, when we creating new task witouht attributes
    name: "Default name",
    phone: "Default phone number",
    email: "Default email"
  },
  initialize: function(params) {
    console.log("Contact initialized: " + this.get("name"));
    console.log(params);
  }

});

export default Contact;

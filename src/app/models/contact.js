import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    "name": "blank name",
    "phone": "blank phone",
    "email": "blank email"
  },
  initialize: function(params){
    console.log("Contact initialized: " + this.get("name"));
    console.log(params);
  }
});

export default Contact;

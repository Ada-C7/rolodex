import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "DEFAULT",
    email: "DEFAULT",
    phone: "DEFAULT"
  },
  logStatus: function() {
    console.log("Name " + this.get("name"));
  },
  initialize: function(params) {
    console.log("Testing", params);
    this.logStatus();
    //to see what params look like
  }
});

export default Contact;

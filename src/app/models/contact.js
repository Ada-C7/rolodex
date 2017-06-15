import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    phone: "unknown",
    email: "unknown"
  },

  logStatus: function(){
    console.log("name: " +  this.get('name'));
    console.log("phone: " +  this.get('phone'));
    console.log("email: " +  this.get('email'));
  },

  // this is a function that runs immediately after the model is created
  // in this particular function, no code is being run
  initialize: function(params){
    console.log("New Contact", params);
    this.logStatus();
  }

});

export default Contact;

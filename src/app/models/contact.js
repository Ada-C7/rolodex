import Backbone from 'backbone';

var Contact = Backbone.Model.extend({

  defaults: {
    name: "YOUR NAME",
    phone: "1-800-555-5555",
    email: "youremail@gmail.com"
  },

  logStatus: function(){
    console.log("Name: " + this.get("name"));
    console.log("Phone: " + this.get("phone"));
    console.log("Email: " + this.get("email"));
  },

  initialize: function(params){
    // console.log("starting", params);
    this.logStatus();
  },
  showAllInfo: function(){

  }
});

export default Contact;

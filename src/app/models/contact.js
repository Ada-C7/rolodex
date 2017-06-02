import Backbone from 'backbone';
// import _ from 'underscore';
// import $ from 'jquery';

const Contact = Backbone.Model.extend({

  defaults: {
    name: "example name",
    phone: "example phone",
    email: "example email"
  },


    initialize: function(){
      // alert("created new contact!")
    }

});

export default Contact;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

// const Contact = Backbone.Model.extend({

var Contact = Backbone.Model.extend({
  defaults: function(){
    return {
      name: "name",
      phone: "phone",
      email: "email"
    };
  },
  toggle: function(){
    this.save({done: !this.get("save")});
  }
})




export default Contact;

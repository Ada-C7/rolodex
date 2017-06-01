import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Contact from '../models/contact.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.rolodexTemplate = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    var that = this;

    this.model.each(function(contact){
      var contactView = new ContactView({
        model: contact,
        template: that.rolodexTemplate,
        // tagName: 'li'
      });
      that.$("#contact-cards").append(contactView.render().el);
    });

    return this;

  },
  events: {
    'click .btn-save' : "saveContact",

    getFormData: function(){
      var inputName = $('#name').val;
      $('#name').val('');

      var inputEmail = $('#email').val;
      $('#email').val('');

      var inputPhone = $('#phone').val;
      $('#phone').val('');

      return {
        name: inputName,
        email: inputEmail,
        phone: inputPhone
      };
    },
    saveContact: function(){
      var contact = new Contact(this.getFormData());

      this.model.add(contact);
    }
  }
});

export default RolodexView;

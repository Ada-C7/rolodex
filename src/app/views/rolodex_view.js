import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';
import Contact from '../models/contact.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();

    var that = this;

    this.model.each(function(contact){
      var contactView = new ContactView({
        model: contact,
        template: that.template
      });
      that.$("#contact-cards").append(contactView.render().el);
    });
    return this;
  },

  events: {
    "click .btn-save": "saveTask",
  },

  getFormData: function(){
    var formName = $('#name').val();
    $('#name').val('');

    var formEmail = $('#email').val();
    $('#email').val('');

    var formPhone = $('#phone').val();
    $('#phone').val('');

    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  }

});

export default RolodexView;

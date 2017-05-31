import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js';


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
    "click .btn-cancel": "clearFormData"
  },

  getFormData: function(){
    var formName = this.$('#name').val();
    this.$('#name').val('');

    var formEmail = this.$('#email').val();
    this.$('#email').val('');

    var formPhone = this.$('#phone').val();
    this.$('#phone').val('');

    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },

  saveTask: function(){
    var newContact = new Contact(this.getFormData());
    this.model.add(newContact);
  },

  clearFormData: function(){
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  }

});

export default RolodexView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Rolodex from '../collections/rolodex.js';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js';

var RolodexView = Backbone.View.extend({

  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();
    var self = this;

    this.model.each(function(contact){
      var contactView = new ContactView({
        model: contact,
        template: self.template,
      });
      self.$("#contact-cards").append(contactView.render().el);
    });

    return this;
  },

  events: {
    "click .btn-save" : "addContact",
    "click .btn-cancel" : "clearFormData"
  },

  getFormData: function(){
    var formName = this.$('.form-name').val();
    var formEmail = this.$('.form-email').val();
    var formPhone = this.$('.form-phone').val();

    this.clearFormData();

    return {
      name: formName,
      email: formEmail,
      phone: formPhone,
    };
  },

  addContact: function(){
    var contact = new Contact(this.getFormData());
    this.model.add(contact);
  },

  clearFormData: function(){
    this.$('.form-name').val(' ');
    this.$('.form-name').val(' ');
    this.$('.form-phone').val(' ');
  }
});

export default RolodexView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Rolodex from '../collections/rolodex.js';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js';
import ContactDetailsView from './contact_details_view.js';

var RolodexView = Backbone.View.extend({

  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();  // shouldn't use jQuery in views

    var self = this;

    this.model.each(function(contact){
      var contactView = new ContactView({
        model: contact,
        template: self.template,
      });
      self.$('#contact-cards').append(contactView.render().el); // shouldn't use jQuery in views
      self.listenTo(contactView, "showDetailsEvent", self.showDetails); // show details event
    });

    return this;
  },


  showDetails: function(contact){
    $('#contact-details').empty();
    $('#contact-details').show();
    console.log(contact);
    var contactDetailsView = new ContactDetailsView({
      model: contact,
    });
    $('#contact-details').append(contactDetailsView.render().el);
  },

  events: {
    "click .btn-save" : "addContact",
    "click .btn-cancel" : "clearFormData",
    "click" : "hideModal",
  },

  getFormData: function(){
    var formName = this.$('.form-name').val();
    var formEmail = this.$('.form-email').val();
    var formPhone = this.$('.form-phone').val();

    this.clearFormData();

    return {
      name: formName.length !== 0 ? formName : undefined,
      email: formEmail.length !== 0 ? formEmail : undefined,
      phone: formPhone.length !== 0 ? formPhone : undefined,
    };
  },

  addContact: function(){
    var contact = new Contact(this.getFormData());
    this.model.add(contact);
  },

  clearFormData: function(){
    this.$('.form-name').val('');
    this.$('.form-email').val('');
    this.$('.form-phone').val('');
  },

  hideModal: function(){
    this.$('#contact-details').hide();
  }
});

export default RolodexView;

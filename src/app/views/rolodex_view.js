import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from '../models/contact.js';
import ContactView from '../views/contact_view.js';
import Rolodex from '../collections/rolodex.js';
import ContactDetailView from '../views/contact_detail_view.js';


var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this, "click", this.hideCard);
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    this.$('#contact-cards').empty();
    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        tagName: 'li',
        model: contact,
        template: that.template
      });
      that.$("#contact-cards").append(contactView.render().el);
      that.listenTo(contactView, "showCard", that.showCard);
    });
    return this;
  },

  events: {
    "click #create-contact" : "addContact",
    "click #cancel-form" : "clearForm",
    "click" : "hideCard"
  },

  getFormData: function() {
    var formName = $("#name").val();
    var formPhone = $("#phone").val();
    var formEmail = $("#email").val();
    this.clearForm();

    return {
      name: formName,
      phone: formPhone,
      email: formEmail
    };
  },

  hideCard: function() {
    $("#contact-details").hide();
  },

  addContact: function() {
    var newContact = new Contact(this.getFormData());
    this.model.add(newContact);
  },

  showCard: function(event) {
    $("#contact-details").empty();
    $("#contact-details").show();
    var contactDetailView = new ContactDetailView({
      model: event.model,
      template: _.template($("#tmpl-contact-details").html())
    });
    this.listenTo(contactDetailView, "showCard", this.showCard);
    $("#contact-details").append(contactDetailView.render().el);
  },

  clearForm: function() {
    $("#name").val('');
    $("#phone").val('');
    $("#email").val('');
  }

});


export default RolodexView;

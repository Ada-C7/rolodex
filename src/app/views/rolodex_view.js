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
    });

    return this;
  },
  events: {
    "click #create-contact" : "addContact",
    "click #cancel-form" : "clearForm",
    // "click" : "hideCard"
    // "click li.contact-card" : "showModal"
  },

  getFormData: function() {
    var formName = $("#name").val();
    var formPhone = $("#phone").val();
    var formEmail = $("#email").val();
    this.clearForm();

    return {
      name: formName,
      phoneNumber: formPhone,
      email: formEmail
    };
  },

  addContact: function() {
    console.log("clicked add");
    var newContact = new Contact(this.getFormData());
    this.model.add(newContact);
  },

  clearForm: function() {
    $("#name").val('');
    $("#phone").val('');
    $("#email").val('');
  }



});


export default RolodexView;

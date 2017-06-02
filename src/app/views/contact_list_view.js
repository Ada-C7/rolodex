import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';
import ContactView from './contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    var self = this;

    self.$('#contact-cards').empty();
    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.template

      });

      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },

  events: {
    'click .btn-save': 'saveContact',
    'click .btn-cancel': 'clearContact',
    'click .contact-card': 'showContactInfo',
    'click .application': 'hideContactInfo'
  },

  saveContact: function(event) {
    var formData = this.readContactForm();
    var contact = new Contact(formData);

    console.log("in save contact, form data: ");
    console.log(formData);

    this.model.add(contact);
  },

  clearContact: function(event) {
      $("#name").val("");
      $("#phoneNumber").val("");
      $("#email").val("");
  },

  readContactForm: function() {
    var nameData = $("#name").val();
    $("#name").val("");

    var phoneNumberData = $("phoneNumber").val();
    $("#phoneNumber").val("");

    var emailData = $("email");
    $("#email").val("");

    var formData = {};

    if (nameData && nameData != "") {
      formData["name"] = nameData
    }
    if (phoneNumberData && phoneNumberData != "") {
      formData["phoneNumberData"] = phoneNumberData
    }
    if (emailData && emailData != "") {
      formData["emailData"] = emailData
    }
    return formData;
  },

  showContactInfo: function(event) {
    event.stopPropagation();
      $("#contact-details").show();
  },

  hideContactInfo: function(event) {
      $("#contact-details").hide();
  }


});



export default RolodexView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';
import ContactView from './contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.contactTemplate;
    this.template2 = params.contactCardDetailsTemplate;
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
      self.listenTo(contactView, "showModal", self.showContactInfo )
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
      $("#phone").val("");
      $("#email").val("");
  },

  readContactForm: function() {
    var nameData = this.$("#name").val();
    this.$("#name").val("");

    var phoneData = this.$("#phone").val();
    this.$("#phone").val("");

    var emailData = this.$("#email").val();
    this.$("#email").val("");

    var formData = {};

    if (nameData && nameData != "") {
      formData["name"] = nameData
    }
    if (phoneData && phoneData != "") {
      formData["phone"] = phoneData
    }
    if (emailData && emailData != "") {
      formData["email"] = emailData
    }
    return formData;
  },

  showContactInfo: function(contactView) {
    // console.log("Contact View:");
// console.log(contactView);

    var contactCardDetailsTemplate = this.template2(contactView.model.toJSON());
    $('#contact-details').html(contactCardDetailsTemplate);

    return this;

    // contactView.model.toJSON()
    //invoke the compiled template on
      // $("#contact-details").show();
  },

  hideContactInfo: function(event) {
      $("#contact-details").hide();
  }


});



export default RolodexView;

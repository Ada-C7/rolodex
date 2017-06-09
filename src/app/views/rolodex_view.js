import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';
import ContactView from './contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);
    this.modalTemplate = _.template($('#tmpl-contact-details').html());
  },
  render: function() {
    // console.log("Inside RolodexView.render()");
    var self = this;
    self.$('#contact-cards').empty();
    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });
      self.listenTo(contactView, "selectedCard", self.displayModal);
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click .btn-save': 'saveContact',
    'click .btn-cancel': 'clearContact',
    'click': 'workDammit'
  },
  workDammit: function() {
    console.log('workDammit');
  },
  readContactForm: function() {
    var nameData = this.$('input[name=name]').val();
    this.$('input[name=name]').val('');

    var emailData = this.$('input[name=email]').val();
    this.$('input[name=email]').val('');

    var phoneData = this.$('input[name=phone]').val();
    this.$('input[name=phone]').val('');
    //
    // return {
    //   name: nameData,
    //   email: emailData,
    //   phone: phoneData
    // };

    var formData = {};
    if (nameData && nameData != "") {
      formData["name"] = nameData;
    }
    if (emailData && emailData != "") {
      formData["email"] = emailData;
    }
    if (phoneData && phoneData != "") {
      formData["phone"] = phoneData;
    }
    return formData;
  },
  saveContact: function() {
    // var contact = new Contact(this.readContactForm());
    var formData = this.readContactForm();
    console.log("In save contact, form data: ");
    console.log(formData);
    // this.model.add(contact);
    this.model.add(formData);
  },
  clearContact: function() {
    this.$('input[name=name]').val('');
    this.$('input[name=email]').val('');
    this.$('input[name=phone]').val('');
  },
  displayModal: function(contact){
    $('#contact-details').empty().animate({opacity: 'toggle'}, 800);
    $('#contact-details').show();
    var generatedModalTemplate = this.modalTemplate(contact.attributes);
    this.$('#contact-details').append(generatedModalTemplate);
  },
});

export default RolodexView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';

var ContactListView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    var self = this;
    self.$('#contact-cards').empty();
    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click #add-contact-button': "addContact",
    'click .cancel-contact': "cancelContact",
    'click ul #contact-card-id' : "seeContactDetails"
  },
  addContact: function(e) {
    var contactData = this.readNewContactForm();
    var contact = new Contact(contactData);
    this.model.add(contact);
  },
  cancelContact: function(e) {
    var contactData = this.readNewContactForm();
  },
  seeContactDetails: function(e){
    $('#contact-details').empty();
    var self = this
    var name = $(e.target).text().trim()
    var contact =  this.model.find(function(model) { return model.get('name') === name; });
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });
      this.$('#contact-details').append(contactView.render().$el);
    return this;
  },

  readNewContactForm: function() {
    var formName= this.$('#name').val();
    this.$('#name').val('');
    var formEmail= this.$('#email').val();
    this.$('#email').val('');
    var formPhone = this.$('#phone').val();
    this.$('#phone').val('');
    var contactData = {};
      if (formName && formName != ""){
        contactData["name"] = formName;
      }
      if (formEmail){
        contactData["email"] = formEmail;
      }
      if (formPhone){
        contactData["phone"] = formPhone;
      }
      return contactData;
  }
});

export default ContactListView;

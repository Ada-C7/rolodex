import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';
import Contact from 'app/models/contact.js';

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
    'click .cancel-contact': "cancelContact"
  },
  addContact: function(e) {
    var contactData = this.readNewContactForm();
    var contact = new Contact(contactData);
    this.model.add(contact);
  },
  cancelContact: function(e) {
    var contactData = this.readNewContactForm();
  },
  readNewContactForm: function() {
    var formName= this.$('#name').val();
    this.$('#name').val('');
    var formEmail= this.$('#email').val();
    this.$('#email').val('');
    var formPhone = this.$('#phone').val();
    this.$('#phone').val('');
    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    }
  }
});

export default ContactListView;

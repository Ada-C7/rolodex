import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';
import ContactInfoView from './contact_info_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;
    this.contactInfoTemplate = params.contactInfoTemplate;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    var self = this;
    self.$('#contact-cards').empty();

    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });
      $('#contact-cards').append(contactView.render().$el);
      self.listenTo(contactView, "openModal", self.renderContactInfo);
    });
    return this;
  },
  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'clearForm',
    'click': 'clearContactInfo'
    // 'openModal': 'renderContactInfo'
  },
  addContact: function(event) {
    var formData = this.renderContactForm();
    this.model.add(formData);
  },
  renderContactForm: function() {
    // An empty string is falsy in JS, so when changed to undefined, the model
    // defaults will be invoked.
    var name = this.$('#name').val() || undefined;
    var email = this.$('#email').val() || undefined;
    var phone = this.$('#phone').val() || undefined;
    this.clearForm();

    return {
      name: name,
      email: email,
      phone: phone
    };
  },
  clearForm: function() {
    ['#name','#email','#phone'].forEach(function(field) {
      $(field).val('');
    });
  },
  renderContactInfo: function(contact) {
    $('#contact-details').show();
    var contactInfoView = new ContactInfoView({
      model: contact,
      template: this.contactInfoTemplate
    });
    $('#contact-details').html(contactInfoView.render().$el);
  },
  clearContactInfo: function(event) {
    $('#contact-details').hide();
  }
});

export default RolodexView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';
import ContactInfoView from './contact_info_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    $('#contact-details').hide();
    var self = this;
    self.$('#contact-cards').empty();

    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });
      $('#contact-cards').append(contactView.render().$el);
      self.listenTo(contactView, "openModule", self.renderContactInfo);
    });
    return this;
  },
  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'clearForm'
    // 'openModule': 'renderContactInfo'
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
    var number = this.$('#phone').val() || undefined;
    this.clearForm();

    return {
      name: name,
      email: email,
      number: number
    };
  },
  clearForm: function() {
    ['#name','#email','#phone'].forEach(function(field) {
      $(field).val('');
    });
  },
  renderContactInfo: function(contact) {
    var contactInfoTemplate = _.template($('#tmpl-contact-details').html());
    $('#contact-details').show();
    $('#contact-details').empty();
    var contactInfoView = new ContactInfoView({
      model: contact,
      template: contactInfoTemplate
    })
    $('#contact-details').append(contactInfoView.render().$el);
  }
});

export default RolodexView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import ContactView from './contact_view';
import Contact from '../models/contact';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.contactTemplate;
    this.detailTemplate = params.detailTemplate;

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
      $('#contact-cards').append(contactView.render().$el);
      self.listenTo(contactView, 'openModal', self.triggerModal);
    });

    return this;
  },

  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'clearForm',
    'click': "hideModal"
  },

  addContact: function(event) {
    var formData = this.readContactForm();
    this.model.add(formData);
  },

  clearForm: function(event) {
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  },

  readContactForm: function() {
  var nameData = this.$('#name').val();
  this.$('#name').val('');

  var emailData = this.$('#email').val();
  this.$('#email').val('');

  var phoneData = this.$('#phone').val();
  this.$('#phone').val('');

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

triggerModal: function(contact) {
  var contactView = new ContactView({
    model: contact,
    template: this.detailTemplate
  });
  this.$('#contact-details').append(contactView.render().$el).show();
},

hideModal: function(event) {
  this.$('#contact-details').hide();
},
});

export default RolodexView;

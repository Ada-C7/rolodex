import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';
import Contact from '../models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.rolodexTemplate;
    this.template2 = params.detailsTemplate;
    this.listenTo(this.model, "update", this.render);
  },
  render: function(){
    var self = this;
    self.$("#contact-cards").empty();
    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.template
      });
      self.$('#contact-cards').append(contactView.render().$el);
      self.listenTo(contactView, "showModal", self.showContactDetails);
    });
    return this;
  },
  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'cancelContact',
    'click .contact-card': 'showcontactDetails',
    'click .application' : 'hideContactDetails'
  },
  addContact: function(event) {
    var formData = this.readRolodexForm();
    var contact = new Contact(formData);
    this.model.add(contact);
  },
  cancelContact: function(event) {
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
  },
  readRolodexForm: function() {
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
  showContactDetails: function(contactView) {
    var contactCardDetailsTemplate = this.template2(contactView.model.toJSON());
    $("#contact-details").html(contactCardDetailsTemplate);
    return this;
  },
  hideContactDetails: function(event) {
    $('#contact-details').hide();
  }

});

export default RolodexView;

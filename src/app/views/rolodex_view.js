import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import 'jquery-ui-bundle';
import Contact from '../models/contact';
import ContactView from '../views/contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params){
    this.contactTemplate = params.contactTemplate;
    this.contactInformationTemplate = params.contactInformationTemplate;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    this.$('#contact-cards').empty();

    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: this.contactTemplate
      });
      this.$('#contact-cards').append(contactView.render().$el);
    }.bind(this));
    return this;
  },
  events: {
    'click .button.btn-save': 'saveContact',
    'click .button.btn-cancel': 'cancelContact',
    'contactClicked': 'showContactInformation',
    'click': 'removeInformation',
    'click #contact-details': 'remainDisplayed'
  },
  saveContact: function(event) {
    var formData = this.readContactForm();
    this.model.add(formData);

    return this.render();
  },
  readContactForm: function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();

    this.cancelContact();

    return {
      name: name,
      email: email,
      phone: phone
    };
  },
  cancelContact: function(event) {
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
  },
  remainDisplayed: function(event) {
    event.stopPropagation();
  },
  removeInformation: function(event){
    this.$('#contact-details').hide();
  },
  showContactInformation: function(event, contact) {
    var contactInformationTemplate = this.contactInformationTemplate(contact.toJSON());
    this.$('#contact-details').html(contactInformationTemplate).show();
  }
});

export default RolodexView;

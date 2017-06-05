// rolodex_view.js

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';
import Contact from '../models/contact.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
      this.contactTemplate = params.template;
      // update - used when you add or remove an item from the collection
      this.listenTo(this.model, "update", this.render);
      this.modalTemplate = _.template($('#tmpl-contact-details').html());
  },
  render: function() {
    this.$('#contact-cards').empty();

    var that = this;

    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        myTemplate: that.contactTemplate
        });
      // 'that.contactDetails' > we use 'that', because we are refering to what we are inside of which is the RolodexView, and we need the contactDetails within the RolodexView
      // 'selected' - is inside of the contact_view, we are listening for when a contact is selected
      that.listenTo(contactView, "selected", that.contactDetails);

      that.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    "click .button.btn-save" : "addContact",
    "click .button.btn-cancel" : "clearFields",
    "click" : "hideModal"
  },
  getFormData: function() {
    var formName = this.$('#name').val();
    this.$('#name').val('');

    var formEmail = this.$('#email').val();
    this.$('#email').val('');

    var formPhone = this.$('#phone').val();
    this.$('#phone').val('');

    if (formName !== "") {
      return {
        name: formName,
        email: formEmail,
        phone: formPhone
      };
    }
  },
  addContact: function() {
    var contact = new Contact(this.getFormData());

    this.model.add(contact);
  },
  clearFields: function() {
    console.log('clearFields button');
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  },
  contactDetails: function(contact) {
    $('#contact-details').empty();
    $('#contact-details').show();

    var createModalTemplate = this.modalTemplate(contact.attributes);

    this.$('#contact-details').append(createModalTemplate);

  },
  hideModal: function(event) {
    // console.log('hideModal function');

    if ($('#contact-details').has(event.target).length === 0 && !$('#contact-details').is(event.target)) {
      $('#contact-details').hide();

    }
  }
});

export default RolodexView;

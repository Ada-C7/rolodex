import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ModalView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    this.$("#edit-form").hide();
    return this;
  },
  events: {
    'click h3.button.btn-edit': 'showEditForm',
    'click h3.button.btn-update': 'updateContact',
    'click h3.button.btn-cancel': 'hideModal'
  },
  showEditForm: function(e) {
    this.$("#edit-form").show();
    this.$("#name-email-phone-deets").hide();
  },
  updateContact: function(event) {
    var formData = this.getFormData();
    // call model method of update.
    this.model.updateContact(formData);
    // show changes in modal
    this.$("#edit-form").hide();
    this.$("#name-email-phone-deets").show();
  },
  getFormData: function() {
    var formName = this.$("#update-contact-name").val();
    var formEmail = this.$("#update-contact-email").val();
    var formPhone = this.$("#update-contact-phone").val();
    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },
  hideModal: function() {
    this.trigger("hide details", this);
  }
  // ,
  // addContact: function(event) {
  //   var formData = this.getFormData();
  //   var contact = new Contact(formData);
  //   this.model.add(contact);
  // }
});

export default ModalView;

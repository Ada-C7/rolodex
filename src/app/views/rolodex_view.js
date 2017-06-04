import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from '../views/contact_view.js';
import Rolodex from '../collections/rolodex.js';


var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.detailTemplate = params.detailTemplate;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    // Clear the unordered list
    this.$('#contact-cards').empty();
    // Iterate through the list rendering each Task
    var that = this;
    this.model.each(function(contact) {
      // Create a new TaskView with the model & template
      var contactView = new ContactView({
        model: contact,
        template: that.template,
        detailTemplate: that.detailTemplate
      });
      that.listenTo(contactView, "contactCard", function(view){
        that.$('#contact-details').html(contactView.renderDetails());
      });
      // Then render the TaskView
      // And append the resulting HTML to the DOM.
      that.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click .btn-save': "saveContact",
    'click .btn-cancel' : "clearForm",
  },
  saveContact: function() {
    var newContact = new Contact(this.getFormData());
     this.model.add(newContact);
  },
  getFormData: function() {

    var formName = $("#name").val();
    var formEmail = $("#email").val();
    var formPhone = $("#phone").val();

    this.clearForm();

    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },
  clearForm: function() {
    $("#name").val('');
    $("#email").val('');
    $("#phone").val('');
  }

  // model: Contact
  // This Rolodex represents a collection of Contacts
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.
});

export default RolodexView;

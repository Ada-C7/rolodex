import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js';

const RolodexView = Backbone.View.extend({

  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;

    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    // Clear the unordered list
    this.$('#contact-cards').empty();
    // Iterate through the list rendering each Task
    var self = this; //created var that refers to this in the scope of the render function (mom metaphor)
    this.model.each(function(contact) {

      var contactView = new ContactView({
        model: contact,
        template: _.template($('#tmpl-contact-card').html()),

      });

      // Then render the TaskView
      // And append the resulting HTML to the DOM.
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'clearForm'
  },

  addContact: function(event) {
    var formData = this.readContactForm();

    console.log("In add contact, form data:");
    console.log(formData);

    this.model.add(formData);
  },

  clearForm: function() {
    this.$('input[name=name]').val('');
    this.$('input[name=email]').val('');
    this.$('input[name=phone]').val('');
  },

  readContactForm: function() {
    var nameData = this.$('input[name=name]').val();

    var emailData = this.$('input[name=email]').val();


    var phoneData = this.$('input[name=phone]').val();

    this.clearForm();

    var formData = {};
    if (nameData && nameData !== "") {
      formData["name"] = nameData
    }
    if (emailData && emailData !=="") {
      formData["email"] = emailData
    }
    if (phoneData && phoneData !== "") {
      formData["phone"] = phoneData
    }
    return formData;
  }

});

export default RolodexView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';

var ContactListView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;

    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    console.log("Inside ContactListView.render()");
    var self = this;

    // Clear out any existing items (incase render
    // is called multiple times)
    self.$('#contact-cards').empty();

    self.model.each(function(contact) {

      // Create a new ContactView with the model & template
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });

      // Then render the ContactView
      // And append the resulting HTML to the DOM.
      contactView.render();
      self.$('#contact-cards').append(contactView.$el);

      // equivalent to
      // self.$el.find('.todo-items').whatever
    });

    // Rules of backbone: always return `this` from `render()`
    return this;
  }

  // events: {
  //   'click .btn-save': 'addContact'
  // },
  //
  // addContact: function(event) {
  //   var formData = this.readContactForm();
  //
  //   console.log("In add contact, form data:");
  //   console.log(formData);
  //
  //   // Create a contact from the form data and add it to the collection
  //   // var contact = new Contact(formData);
  //   // this.model.add(contact);
  //
  //   // Can just pass the form data directly, because
  //   // the collection knows what its model is
  //   this.model.add(formData);
  // },
//
//   readContactForm: function() {
//     var nameData = this.$('#name').val();
//     this.$('#name').val('');
//
//     var emailData = this.$('#email').val();
//     this.$('#email').val('');
//
//     var phonedData = this.$('#phone').val();
//     this.$('#phone').val('');
//
//     var formData = {};
//     if (nameData && nameData != "") {
//       formData["name"] = nameData
//     }
//     if (emailData && emailData != "") {
//       formData["email"] = emailData
//     }
//     if (phoneData && phoneData != "") {
//       formData["phone"] = phoneData
//     }
//     return formData;
//   }
//
});

export default ContactListView;

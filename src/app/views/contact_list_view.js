import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';
// import Task from '../models/contact';

var ContactListView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;

    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    console.log("Inside TLV.render()");
    var self = this;

    // Clear out any existing items (incase render
    // is called multiple times)
    self.$('#contact-cards').empty();

    self.model.each(function(contact) {

      // Create a new TaskView with the model & template
      var contactView = new ContactView({
        model: contact,
        template: self.contactTemplate
      });

      // Then render the ContactView
      // And append the resulting HTML to the DOM.
      self.$('#contact-cards').append(contactView.render().$el);

      // equivalent to
      // self.$el.find('.todo-items').whatever
    });

    // Rules of backbone: always return `this` from `render()`
    return this;
  }

  // events: {
  //   'click #add-contact': 'addContact'
  // },

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

//   readContactForm: function() {
//     var titleData = this.$('#title').val();
//     this.$('#title').val('');
//
//     var descriptionData = this.$('#description').val();
//     this.$('#description').val('');
//
//     var completedData = this.$('#completed-checkbox').prop('checked');
//     this.$('#completed-checkbox').prop('checked', false);
//
//     var formData = {};
//     if (titleData && titleData != "") {
//       formData["title"] = titleData
//     }
//     if (descriptionData && descriptionData != "") {
//       formData["description"] = descriptionData
//     }
//     if (completedData && completedData != "") {
//       formData["completed"] = completedData
//     }
//     return formData;
//   }
//
});

export default ContactListView;

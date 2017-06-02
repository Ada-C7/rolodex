import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';

const RolodexView = Backbone.View.extend({
   initialize: function(rolodexParams) {
     this.template = rolodexParams.template;


    this.listenTo(this.model, "update", this.render);
   },
   render: function() {
      console.log("Inside RV.render()");
      var self = this;

      // Clear out any existing items (incase render
      // is called multiple times)
      self.$('#contact-cards').empty();

      self.model.each(function(contact) {

        // Create a new ContactView with the model & template
        var contactView = new ContactView({
          model: contact,
          template: self.template
        });

        // Then render the ContactView
        // And append the resulting HTML to the DOM.
        self.$('#contact-cards').append(contactView.render().$el);

        // equivalent to
        // self.$el.find(‘.todo-items’).whatever
      });

      // Rules of backbone: always return `this` from `render()`
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

    // Create a contact from the form data and add it to the collection
    // var contact = new Contact(formData);
    // this.model.add(contact);

    // Can just pass the form data directly, because
    // the collection knows what its model is
    this.model.add(formData);
  },


  clearForm: function() {
    this.$('input[name=name]').val('');
    this.$('input[name=email]').val('');
    this.$('input[name=phone]').val('');
  },

  readContactForm: function() {
    var nameData = this.$('input[name=name]').val();
    // this.$('#name').val('');

    var emailData = this.$('input[name=email]').val();
    // this.$('#email').val('');

    var phoneData = this.$('input[name=phone]').val();
    // this.$('#phone').val('');

    this.clearForm();

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
  }
});

export default RolodexView;

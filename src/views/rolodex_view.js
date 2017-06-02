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
  },
  render: function() {
    this.$('#contact-cards').empty();

    var that = this;

    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        myTemplate: that.contactTemplate,
        //create a listener for each card (listenTo)
        selected: that.listenTo(that.model, "all", that.contactDetails)
        // tagName: ''
      });
      that.$('#contact-cards').append(contactView.render().$el);
      //Trying to get the card data to show... this should not be a template.
      // that.$('#tmpl-contact-details').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    "click .button.btn-save" : "addContact",
    "click .button.btn-cancel" : "clearFields",
    // "click .contact-card" : "contactDetails"
  },
  getFormData: function() {
    var formName = this.$('#name').val();
    this.$('#name').val('');

    var formEmail = this.$('#email').val();
    this.$('#email').val('');

    var formPhone = this.$('#phone').val();
    this.$('#phone').val('');

    if (formName === "") {
      return {
        //will return default values
      };
    } else {
      return {
        name: formName,
        email: formEmail,
        phone: formPhone
      };
    }
  },
  addContact: function() {
    // console.log('addContact button');
    var contact = new Contact(this.getFormData());

    this.model.add(contact);
  },
  clearFields: function() {
    console.log('clearFields button');
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
    // this.$('#contact-form').val('');
  }
  // contactDetails: function(contact) {
  //   var template = _.$('#')
  //
  //
  //   // console.log('contact details button');
  //   // console.log(this.model.models[0].attributes);
  //   // this.trigger("", Contact.get());
  //   // console.log(this);
  //   // console.log(event.target);
  //
  // }
});

export default RolodexView;

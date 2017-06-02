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
        //create a listener for each card (listenTo)
        // selected: that.listenTo(that.model, "all", that.contactDetails),
        // correct way to do what you were trying to do on line 23...see below
        // contactDetails: that.listenTo(contactView, "selected", function(view) {});

        // tagName: ''
        });
      // 'that.contactDetails' > we use 'that', because we are refering to what we are inside of which is the RolodexView, and we need the contactDetails within the RolodexView
      // 'selected' - is inside of the contact_view, we are listening for when a contact is selected
      that.listenTo(contactView, "selected", that.contactDetails);

      that.$('#contact-cards').append(contactView.render().$el);
      //Trying to get the card data to show... this should not be a template.
      // that.$('#tmpl-contact-details').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    "click .button.btn-save" : "addContact",
    "click .button.btn-cancel" : "clearFields",
    "click header" : "hideModal"
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
  },
  contactDetails: function(contact) {
    $('#contact-details').empty();
    $('#contact-details').show();


    // var createModalTemplate = this.modalTemplate(contact.toJSON());
    var createModalTemplate = this.modalTemplate(contact.attributes);

    this.$('#contact-details').append(createModalTemplate);

    //might not need return this...
    // return this;
    // console.log('contact details button');
    // console.log(this.model.models[0].attributes);
    // this.trigger("", Contact.get());
    // console.log(this);
    // console.log(event.target);

  },
  hideModal: function(event) {
    console.log('hideModal function');
    // if ($('#contact-details')) {
    //   $('#contact-details').hide();
    // }
    $('#contact-details').hide();

    // if (event.target == $('#contact-details')) {
    //   $('#contact-details').hide();
    //
    // }
    // if ($('#contact-details').has(event.target).length === 0 && !$('#contact-details').is(event.target)) {
    //   $('#contact-cards').text('you clicked outside the box');
    // } else {
    //   $('#contact-cards').text('you clicked inside the box');
    // }

  }
});

export default RolodexView;

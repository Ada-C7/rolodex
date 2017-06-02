import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js';


var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);

  },

  render: function(){
    this.$('#contact-cards').empty();

    var that = this;

    this.model.each(function(contact){
      var contactView = new ContactView({
        model: contact,
        template: that.template
      });
      that.$("#contact-cards").append(contactView.render().el);
      that.listenTo(contactView, 'showDetails', that.displayModal);
    });
    return this;

  },

  events: {
    "click .btn-save": "saveTask",
    "click .btn-cancel": "clearFormData"
  },

  getFormData: function(){
    var formName = this.$('#name').val();
    this.$('#name').val('');

    var formEmail = this.$('#email').val();
    this.$('#email').val('');

    var formPhone = this.$('#phone').val();
    this.$('#phone').val('');

    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },

  saveTask: function(){
    var newContact = new Contact(this.getFormData());
    this.model.add(newContact);
  },

  clearFormData: function(){
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  },

  // ----------------//

  displayModal: function(contact){
    console.log(contact);
    $('#contact-details').empty();
    var contactDetails = this.generateHTML(contact);
    $("#contact-details").append(contactDetails);

  },

  getData: function(contact){
    var name = contact.get('name');
    var email = contact.get('email');
    var phone = contact.get('phone');

    return {
      name: name,
      email: email,
      phone: phone
    };
  },
  generateHTML: function(contact){
    var contactDetailsData = this.getData(contact);

    var contactDetailsTemplate = _.template($('#tmpl-contact-details').html());

    var generatedHTML = contactDetailsTemplate({
      name: contactDetailsData.name,
      email: contactDetailsData.email,
      phone: contactDetailsData.phone
    });

    return generatedHTML;
  }


});

export default RolodexView;

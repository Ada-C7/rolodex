import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view.js';
import Contact from '../models/contact.js';

var RolodexView = Backbone.View.extend({

  initialize: function(params){
    this.cardTemplate = params.cardTemplate;
    this.detailTemplate = params.detailTemplate;
    this.listenTo(this.model,'update', this.render);
  },

  render: function(){
    var self = this;
    this.$('#contact-cards').empty();
    this.model.each(function(contact){
      var contactView = new ContactView({
        model: contact,
        cardTemplate: self.cardTemplate,
        detailTemplate: self.detailTemplate
      });
      self.$('#contact-cards').append(contactView.render().$el);
      self.listenTo(contactView,'select', self.show_details)
    });
    return this;
  },

  events: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'clearForm'
  },

  addContact: function(){
    var formData = this.readForm();
    var newContact = new Contact(formData);
    this.model.add(newContact);
    // this.model.add(formData);
  },

  clearForm: function(){
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  },

  readForm: function(){
    var formName = this.$('#name').val();
    var formEmail = this.$('#email').val();
    var formPhone = this.$('#phone').val();
    this.clearForm();

    var formData = {};
    if (formName && formName != "") {
      formData["name"] = formName
    }
    if (formEmail && formEmail != "") {
      formData["email"] = formEmail
    }
    if (formPhone && formPhone != "") {
      formData["phone"] = formPhone
    }
    return formData;
  },

  show_details: function(contactView){

    // console.log('Click of button for ' + this.model.get('name'));
    console.log('Click of button for ' + contactView.model.get('name'));
    var compiledTemplate2 = this.detailTemplate(contactView.model.toJSON());
    $('#contact-details').html(compiledTemplate2);
    return this;

  }
});

export default RolodexView;

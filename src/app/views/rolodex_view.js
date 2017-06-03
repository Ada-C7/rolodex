import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Contact from '../models/contact.js';
import ContactView from '../views/contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.template;
    this.listenTo(this.model, "update", this.render);
    // Wave3, compling modal template and adding it to html
    this.modalTemplate = _.template($('#tmpl-contact-details').html());
    console.log('this modalTemplate ', this.modalTemplate);
  },

  render: function(){
    this.$('#contact-cards').empty();
    var that = this;

    this.model.each(function(contact){
      var contactView = new ContactView({
        model: contact,
        myTemplate: that.contactTemplate,
      });
      // Wave3 create listener for each contact to be filled in the modal
      that.listenTo(contactView, "selected", that.viewModal);

      // Wave2, displaying list of contacts using rolodex collection
      that.$("#contact-cards").append(contactView.render().$el);
    });

    return this;
  },

// Wave3 backbone modal event handler
  viewModal: function(contact){
    $('#contact-details').show();
    $('#contact-details').empty();
    var generatedModalTemplate= this.modalTemplate(contact.toJSON());
    this.$('#contact-details').append(generatedModalTemplate);
  },
  events: {
    'click .btn-save' : 'saveContact',
    'click .btn-cancel' : 'cancelContact',
    'click ' : 'hideModal'
  },

  hideModal: function(){
    if($('#contact-details').has(event.target).length === 0 && !$('#contact-details').is(event.target)){
    $('#contact-details').hide();
    }
  },

  // Read the Form data to create new contact
  getFormData: function(){
    var inputName = this.$('#name').val();
    this.$('#name').val('');

    var inputEmail = this.$('#email').val();
    this.$('#email').val('');

    var inputPhone = this.$('#phone').val();
    this.$('#phone').val('');

    return {
      name: inputName,
      email: inputEmail,
      phone: inputPhone
    };
  },
  saveContact: function(){
    var contact = new Contact(this.getFormData());

    this.model.add(contact);
  },
  cancelContact: function(){
    this.$('#name').val('');
    this.$('#email').val('');
    this.$('#phone').val('');
  }
});

export default RolodexView;

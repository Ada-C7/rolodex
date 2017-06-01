import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.cardTemplate = params.template1;
    this.detailsTemplate = params.template2;

    this.listenTo(this.model, "update", this.render);

  },
  render: function(){
    var self = this;
    self.$('#contact-cards').empty();

    self.model.each(function(contact) {

      var contactView = new ContactView({
        model: contact,
        cardTemplate: self.cardTemplate,
        detailsTemplate: self.detailsTemplate
      });

      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  events: {
    'click .btn-save': "addContact",
    'click .btn-cancel': "cancelContact",
    'contactSelected' : "triggerModal",
    'click' : "hideModal",
    'click #contact-details': "keepModal"
  },

  getFormFields: function(){
    var nameData = this.$('.name').val();
    var emailData = this.$('.email').val();
    var phoneData = this.$('.phone').val();

    return {
      name: nameData,
      email: emailData,
      phone: phoneData
    };
  },
  clearForm: function(){
    this.$('.input').val('');
  },
  addContact: function() {
    var formValues = this.getFormFields();
    this.model.add(formValues);
    this.clearForm();
  },
  cancelContact: function() {
    this.clearForm();
  },
  triggerModal: function(event, contact){
    var detailsTemplateHTML = this.detailsTemplate(contact.toJSON());
    this.$('#contact-details').html(detailsTemplateHTML).show();
  },
  hideModal: function(event){
    this.$('#contact-details').hide();
  },
  keepModal: function(event){
    event.stopPropagation();
  }
});


export default RolodexView;

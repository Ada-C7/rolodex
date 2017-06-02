import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.selectedContact = null;

    this.cardTemplate = params.template1;
    this.detailsTemplate = params.template2;
    this.editTemplate = params.template3;

    this.listenTo(this.model, "update", this.render);

  },
  render: function(){
    var self = this;
    self.$('#contact-cards').empty();

    self.model.each(function(contact) {

      var contactView = new ContactView({
        model: contact,
        cardTemplate: self.cardTemplate,
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
    'click #contact-details': "keepModal",
    'click .btn-edit': "openEditForm",
    'click .btn-save-edit': "saveEdit",
    'click .btn-cancel-edit': "cancelEdit"
  },
  getAddContactData: function(){
    var nameData = this.$('.contact-form .name').val();
    var emailData = this.$('.contact-form .email').val();
    var phoneData = this.$('.contact-form .phone').val();

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
    var formValues = this.getAddContactData();
    this.model.add(formValues);
    this.clearForm();
  },
  cancelContact: function() {
    this.clearForm();
  },
  triggerModal: function(event, contact){
    var detailsTemplateHTML = this.detailsTemplate(contact.toJSON());
    this.$('#contact-details').html(detailsTemplateHTML).show().removeClass("edit-form");
    this.selectedContact = contact;
  },
  hideModal: function(event){
    this.selectedContact = null;
    this.$('#contact-details').hide();
  },
  keepModal: function(event){
    event.stopPropagation();
  },
  openEditForm: function(event){
    this.$('#contact-details').addClass("edit-form");
    var editTemplateHTML = this.editTemplate(this.selectedContact.toJSON());
    this.$('#contact-details').html(editTemplateHTML).show();
},
saveEdit: function(event){

},
cancelEdit: function(event){
  this.triggerModal(event, this.selectedContact);
}
// console.log(this.selectedContact);
//
// this.selectedContact.set(formValues);
//

});


export default RolodexView;

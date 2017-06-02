import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view';
import Contact from '../models/contact';
import Rolodex from '../collections/rolodex';

// the RolodexView includes the cards but also adding new cards - save/cancel button)
// and displaying the details
var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.templateCard = params.templateCard;
    this.templateDetails = params.templateDetails;
    // update only relates to adding or removing an instance from the collection
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#contact-cards').empty();

    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        templateCard: that.templateCard,
      });

      that.$('#contact-cards').append(contactView.render().$el);
      // this is the second part to trigger - it is expecting listening for the event "displayDetails"
      // when this event happens it will call the displayDetails function
      that.listenTo( contactView, "displayDetails", that.displayDetails );
    });
    return this;
  },

  events: {
    'click .btn-save': "addContact",
    'click .btn-cancel': "clearForm",
    // 'click .btn-delete': "deleteContact",
    'click': "hideDetails"
  },

  addContact: function(event){
    console.log("adding new contact");
    var contactData = this.readNewContactForm();
    var contact = new Contact(contactData);
    this.model.add(contact);
  },

  readNewContactForm: function(){
    console.log("make form data into object");

    var name = this.$("#name").val();
    var email = this.$('#email').val();
    var phone = this.$('#phone').val();

    this.clearForm();

    return {
      name: name,
      phone: phone,
      email: email
    };
  },

  // how to clear the input from the input fields
  clearForm: function(event){
    this.$("#name").val("");
    this.$('#email').val("");
    this.$('#phone').val("");
  },

  // what ever info you sent along with trigger can be accessed here - cause listenTo calls this function
  // should you make the model card it's own view? - make new Detail view here
  // in detail view have the html rendered
  displayDetails: function(contactCard) {

    console.log("show the contact details");
    this.selectedContact = contactCard;

    var compiledTemplateDetails = this.templateDetails( contactCard.model.toJSON() );
    $("#contact-details").html(compiledTemplateDetails).show();

    $(".button.btn-delete").click( this.deleteContact.bind(this) );
  },

  deleteContact: function(event) {
    event.stopPropagation();
    console.log(event);
    console.log("you want to delete the contact");
    console.log(this.selectedContact);
    this.selectedContact.model.destroy();
    this.hideDetails();
  },

  hideDetails: function(event) {
    // console.log( event.isPropagationStopped() );
    console.log("hide the details");
    $("#contact-details").hide();
  }
});

export default RolodexView;

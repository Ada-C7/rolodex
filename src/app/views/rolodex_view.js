import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view';
import Contact from '../models/contact';
import Rolodex from '../collections/rolodex';
import DetailsView from '../views/details_view';

// the RolodexView includes the cards but also adding new cards - save/cancel button)
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

      // that.$('#contact-details').hide();
      // this is the second part to trigger - this/that is listening for the event "displayDetails"
      that.listenTo( contactView, "displayDetails", that.displayDetails );
    });

    return this;
  },

  events: {
    'click .btn-save': "addContact",
    'click .btn-cancel': "clearForm",
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

  clearForm: function(event){
    this.$("#name").val("");
    this.$('#email').val("");
    this.$('#phone').val("");
  },

  hideDetails: function(event) {
    $('#contact-details').hide();
  },

  displayDetails: function(contactCard) {
    console.log("creating the details view");

    var detailsView = new DetailsView ({
      model: contactCard.model,
      templateDetails: this.templateDetails,
    });

    this.$('#contact-details').empty();
    this.$('#contact-details').append( detailsView.render().$el );

    $('div.details').show();
    $('div.edit-form').hide();
    $('#contact-details').show();
  }

});

export default RolodexView;

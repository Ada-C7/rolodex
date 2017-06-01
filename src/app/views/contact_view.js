import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },

  events: {
    'click .contact-card': 'showContactDetails',
  },

  showContactDetails: function() {
    //append contact details to "#tmpl-contact-details"
    //show Contact Details
  }

});

export default ContactView;



$('.btn-save').click(function() {
  var contact = new Contact( getContactInfo);
  rolodexList.add(contact);
  //get data from form
  //create Contact
  //add to list
});

//render one contact
var renderContact = function(contact) {
  //Get template using jQuery
  var templateText = $('#tmpl-contact-card').html();
  //create an underscore template object
  var templateObject = _.template(templateText);
  //fill in the ERB-style handles (<%- %>) with data from our task
  var compiledHTML = $(templateObject(contact.toJSON()));

  //append the results to the DOM
  $('#contact-cards').append(compiledHTML);
};

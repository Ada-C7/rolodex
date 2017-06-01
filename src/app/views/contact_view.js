import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';

const ContactView = Backbone.View.extend({
  // cards are being sandwhiched inbetween div elements
  // tagName: "li",
  // className: "contact-card small-11 medium-4 large-2 medium-offset-1 columns",

  initialize: function(params) {
    this.templateCard = params.templateCard;
    this.templateDetails = params.templateDetails;
    console.log(this);
  },

  render: function(){
    var compiledTemplate = this.templateCard(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click li.contact-card': "showDetails",
  },

  // on the right track...
  showDetails: function(event) {
    console.log("show the contact details");
    var compiledTemplateDetails = this.templateDetails( this.model.toJSON() );
    console.log(compiledTemplateDetails);

    // chaining the methods works
    $("#contact-details").html(compiledTemplateDetails).show();
    // $("#contact-details").show();

  },

});

export default ContactView;

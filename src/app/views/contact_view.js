import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
  tagName: 'button',
  className: "contact-card small-11 medium-4 large-2 medium-offset-1 columns",
  initialize: function(params) {
    this.cardTemplate = params.cardTemplate;
    this.detailTemplate = params.detailTemplate;
    // this.listenTo(this.model, "change", this.render);   // will listen to a change in the individual contact info
  },

  render: function() {  // called when we want it to load into DOM
    var compiledTemplate = this.cardTemplate(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click button.contact-card': "showDetails"
  },

  showDetails: function(e) {
    e.preventDefault();
    this.$('#contact-details').show();
    // var compiledTemplate = this.detailTemplate(this.model.toJSON());
    // this.$el.html(compiledTemplate);
    // return this;
  }



});

export default ContactView;

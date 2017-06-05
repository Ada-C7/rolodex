import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
  tagName: 'li',
  className: "contact-card small-11 medium-4 large-2 medium-offset-1 columns",
  initialize: function(params) {
    this.cardTemplate = params.cardTemplate;
    this.detailTemplate = params.detailTemplate;
    // this.listenTo(this.model, "change", this.render);   // will listen to a change in the individual contact info
  },

  render: function() {  // called when we want it to load into DOM
    var compiledTemplate1 = this.cardTemplate(this.model.toJSON());
    this.$el.html(compiledTemplate1);
    return this;
  },

  events: {
    'click ': "showDetails"
  },

  showDetails: function(e) {
    e.stopPropagation();
    $('#contact-details').show();
    this.trigger('select', this)
  }



});

export default ContactView;

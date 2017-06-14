import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from '../models/contact';

const ContactView = Backbone.View.extend({
  // contact_view is in <ul> w/ id=contact-cards
  tagName: 'li',

  initialize: function(params) {
    this.template = params.template;
    this.detailTemplate = params.detailTemplate;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    // console.log("HERE: inside contactView render");
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  showDetails: function(event) {
    console.log(event);
    event.stopPropagation();
    console.log("single contact clicked!");

    var compiledDetailTemplate = this.detailTemplate(this.model.toJSON());
    $('#contact-details').html(compiledDetailTemplate);
    $('#contact-details').show();
    return this;
  },

  hideDetails: function() {
    console.log("hello");
    // if (('#contact-details').show(true)) {
  },

  events: {
    'click .contact-card': 'showDetails',
    'click body': 'hideDetails',
  },
});

export default ContactView;

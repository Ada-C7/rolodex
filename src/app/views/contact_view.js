import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass(params.class);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    // click on card, which triggers showDetails
    "click" : "selectedHandler"
  },
  selectedHandler: function(event) {
    this.trigger("showDetails", this.model);
  }
});

export default ContactView;

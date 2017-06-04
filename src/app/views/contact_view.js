import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

var ContactView = Backbone.View.extend({
  tagName: 'li',
  className: 'contact-card small-11 medium-4 large-2 medium-offset-1 columns',
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
    "click": "showDetails"
  },

  showDetails: function(event) {
    event.stopPropagation();
    $("#contact-details").show();
    this.trigger("showModal", this);
  }
});

export default ContactView;

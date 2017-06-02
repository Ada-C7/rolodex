import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactDetailView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass("contact-card small-11 medium-4 large-2 medium-offset-1 columns");
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

// contact_view.js
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.$el.addClass('contact-card small-11 medium-4 large-2 medium-offset-1 columns');
    this.listenTo(this.model, "change", this.render);
    console.log(this.$el);
    this.trigger("selected", this.model);
    // this.listenTo(this.$el, 'click', this.showContactDetails);
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },

  events: {
    'click': 'selectedTrigger'
  },

  selectedTrigger: function(event) {
    event.stopPropagation();
    this.trigger("showDetails", this.model);
  },



});


export default ContactView;

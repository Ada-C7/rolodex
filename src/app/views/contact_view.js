
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({

  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click': 'selectContact'
  },
  selectContact: function(event) {
    this.$el.trigger('selectedContact', this.model);
    event.stopPropagation();
  }
});

export default ContactView;

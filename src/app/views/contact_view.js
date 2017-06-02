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
    console.log(compiledTemplate);
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click': 'showContact',
  },
  
  showContact: function(event) {
    this.$el.trigger('contactClicked', this.model);
    event.stopPropagation();
  }

});


export default ContactView;

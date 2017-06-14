import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({
  // tagName: 'li',
  // className: "contact-item column column-block",
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  showDets: function(event) {
    var contactDets = this.template(this.model.toJSON());
    $('#contact-details').html(contactDets);
    $('#tmpl-contact-card').show();
     event.stopPropagation(); //this kills the 'bubbling' on the click event
  },

  events: {
    'click': 'showDets'
  }
  //come back fro delete?
});

export default ContactView;

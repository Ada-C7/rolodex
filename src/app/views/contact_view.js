import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact.js';

const ContactView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.$el.addClass("contact-card small-11 medium-4 large-2 medium-offset-1 columns");
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
   'click' : "triggerDetail",
 },
 triggerDetail: function(event) {
   event.stopPropagation();
   this.trigger('showDetail', this.model);
 }
});

export default ContactView;

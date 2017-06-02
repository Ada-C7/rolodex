import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from '../models/contact';


var ContactView = Backbone.View.extend({
  tagName: 'li',
  className: 'contact-card small-11 medium-4 large-2 medium-offset-1 columns',

  initialize: function(params) {
    this.model = params.model;
    this.template = params.template;

    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  }
});

export default ContactView;

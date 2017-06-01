import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from '../models/contact';

var ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default ContactView;

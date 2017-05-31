// task_view.js

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

var ContactView = Backbone.View.extend( {
  initialize: function(params) {
    this.template = params.template;

  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;

  }
  // events: {
  //
  // }
});

export default ContactView;

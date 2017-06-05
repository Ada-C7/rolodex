// task_view.js

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

var ContactView = Backbone.View.extend( {
  initialize: function(params) {
    this.template = params.myTemplate;

    // TODO: Below is code that will be used for updating a single attribute
    // change - changing a single attribute  (changing a phone number etc... )
    // this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    "click" : "onClick"

  },
  onClick: function() {
    // Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
    event.stopPropagation();

    var click = this.trigger('selected', this.model);
    console.log('click', click);
  }

});

export default ContactView;

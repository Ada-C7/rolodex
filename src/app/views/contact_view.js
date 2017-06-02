import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Task from '../models/contact.js';

const ContactView = Backbone.View.extend({
  tagName: 'li',
  className: "contact-item column column-block",
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render:function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }

  //come back fro delete?
});

export default ContactView;

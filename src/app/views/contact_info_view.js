import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js'

const ContactInfoView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var generatedHTML = this.template(this.model.toJSON());
    this.$el.html(generatedHTML);
    return this;
  }
})

export default ContactInfoView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from './contact_view.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    this.$('#contact-cards').empty();
    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template,
        tagName: 'li'
      });
      that.$('#contact-cards').append(contactView.render().el);
    });
    return this;
  }
});

export default RolodexView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';


var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    this.$('#contact-cards').empty();
    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template,
        className: "contact-card small-11 medium-4 large-2 medium-offset-1 columns",
        tagName: 'li'
      });
      that.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  }
});

export default RolodexView;

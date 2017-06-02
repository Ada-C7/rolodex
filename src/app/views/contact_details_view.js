import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const ContactDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = _.template($('#tmpl-contact-details').html());
  },
  render: function() {
    this.$el.show();
    this.$('#contact-details').empty();
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default ContactDetailsView;

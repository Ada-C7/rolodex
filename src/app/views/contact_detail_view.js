import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactDetailView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  }
});

export default ContactDetailView;

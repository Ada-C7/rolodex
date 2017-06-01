import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const ContactDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = _.template($('#tmpl-contact-details').html());
    // this.$el.addClass('.hide');
    // this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    this.$('#contact-details').empty();
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default ContactDetailsView;

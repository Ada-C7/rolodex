import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "change", this.render);
  },

  events: {
    'click .contact-card': 'toggleModal'
  },

  toggleModal: function(event) {
    this.$el.trigger('contactSelected', this.model);
    event.stopPropagation();
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
  // this.$el.trigger('contactSelected', this.model(),
//  event.stopPropagation()
});

export default ContactView;

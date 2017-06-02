import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';
import ContactInfoView from './contact_info_view'

const ContactView = Backbone.View.extend({
  tagName: 'li',
  className: 'contact-card small-11 medium-4 large-2 medium-offset-1 columns',
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var generatedHTML = this.template(this.model.toJSON());
    this.$el.html(generatedHTML);
    return this;
  },
  events: {
    'click': "showInfo"
  },
  showInfo: function(event) {
    this.trigger('openModal', this.model);
    event.stopPropagation();
    // this.$el.trigger('event', this.model)
  }
});

export default ContactView;

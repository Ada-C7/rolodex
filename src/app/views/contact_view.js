import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact'

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.contactTemplate = params.contactTemplate;
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  showDetails: function(event) {
    // console.log(this);
    var contactDetails = this.contactTemplate(this.model.toJSON());
    $('#contact-details').html(contactDetails);
    $('#contact-details').show();
    event.stopPropagation();
  },

  events: {
    'click': 'showDetails',
  }
});

export default ContactView;

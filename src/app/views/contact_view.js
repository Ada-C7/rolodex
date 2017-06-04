import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact.js';

const ContactView = Backbone.View.extend({
  initialize: function (params){
    this.template = params.template;
    this.detailTemplate = params.detailTemplate;
  },
  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  renderDetails: function(){
    var compiledTemplate = this.detailTemplate(this.model.toJSON());
    return compiledTemplate;
  },
  events: {
  'click li': "showDetails",
  'click': "hideDetails"
  },
  showDetails: function() {
    event.stopPropagation();
    $('#contact-details').toggle();
    this.trigger("contactCard", this);
  }
});

export default ContactView;

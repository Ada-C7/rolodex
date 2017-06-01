import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.$el.addClass('contact-card small-11 medium-4 large-2 medium-offset-1 columns');
    this.listenTo(this.model, "update", this.render);
  },
  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click': "showDetails"
  },
  showDetails: function(event){
    event.stopPropagation();
    $("#contact-details").empty();
    var detailsTemplate =  _.template($('#tmpl-contact-details').html());
    var compiledTemplate = detailsTemplate(this.model.toJSON());

    $('#contact-details').append(compiledTemplate);
    $("#contact-details").show();
  }
});

export default ContactView;

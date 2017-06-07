import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactDetailsView from './contact_details_view.js';

var ContactView = Backbone.View.extend({

  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    console.log(this);
    return this;
  },

  events: {
    "click" : "selectedHandler",
    "mouseover" : "mouseoverHandler",
    "mouseout" : "mouseoverHandler"
  },


  selectedHandler: function(event){
    event.stopPropagation();
    this.trigger("showDetailsEvent", this.model);
  },

  mouseoverHandler: function(event){
      this.$('.staff-pic').toggleClass('grayscale');
  }

});

export default ContactView;

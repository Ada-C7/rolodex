import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';


const ContactView = Backbone.View.extend({

  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click": "selected",
  },

  selected: function(event){
    event.stopPropagation();
    var model = this.model;
    this.trigger("showDetails", model);
  },

});

export default ContactView;

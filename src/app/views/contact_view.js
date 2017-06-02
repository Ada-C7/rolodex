import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

const ContactView = Backbone.View.extend({

  initialize: function(params) {
  this.template = params.myTemplate;

  this.listenTo(this.model, "change", this.render);
  },
    render: function(){
    var renderedView = this.template(this.model.toJSON());
    this.$el.html(renderedView);

    return this;
  },
  events:{
    'click' : 'onClick'
  },
  onClick: function(){
    // Prevents the event from bubbling down the DOM, clicking anywhwere different than the event, will dissappear
    event.stopPropagation();

    // selected is a custom backbone event
    var clicked = this.trigger("selected", this.model);
    console.log(clicked);
  }

});

export default ContactView;

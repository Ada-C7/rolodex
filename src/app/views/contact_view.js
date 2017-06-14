import Backbone from 'backbone';
import _ from "underscore";
import $ from "jquery";
import Contact from "../models/contact";
import Rolodex from "../collections/rolodex";

const ContactView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  events: {
    "click": "showDetail"
    // "click": "editContact"
  },
  render: function(){
    var compiledHTML = this.template(this.model.toJSON());
    this.$el.html(compiledHTML);
    $("#contact-cards").append(this.el);
    return this;
  },
  showDetail: function(e){
    this.trigger("showDetail", this.model);
    e.stopPropagation();
  }
});

export default ContactView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';


const ContactView = Backbone.View.extend({

  initialize: function(params) {
  this.template = params.myTemplate;

  // this.listenTo(this.model, "change", this.render);
  },
    render: function(){
    var renderedView = this.template(this.model.toJSON());
    this.$el.html(renderedView);

    return this;
  },
  // events:{
  //   'click btn-save' : "cancelContact",
  // }

});

export default ContactView;

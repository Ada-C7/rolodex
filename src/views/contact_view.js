// task_view.js

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';

var ContactView = Backbone.View.extend( {
  initialize: function(params) {
    this.template = params.myTemplate;

    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
    this.listElement = $('#contact-details');

    // Bellow is code that will be used for updating a single attribute
    // change - changing a single attribute  (changing a phone number etc... )
    // this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    "click" : "onClick"

  },
  onClick: function() {
    //take this.model and make it so it can be passed onto the rolodex view
    var modalHTML = this.detailsTemplate({ name: this.model.get("name"), phone: this.model.get("phone"), email: this.model.get("email")});

    this.listElement.html(modalHTML);
    // $('#contact-details').show();

    // var click = this.trigger("selected", this.model);
    // console.log(click);
  }

});

export default ContactView;

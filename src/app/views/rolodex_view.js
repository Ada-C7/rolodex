import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';
import Contact from '../models/contact.js';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    console.log(this.el);
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    // clear container
    $("#contact-cards").empty();
    // saved reference to 'this'
    var that = this;
    // looped through collection
    this.model.each(function(contact) {
      // created a new view for each contact
      var contactView = new ContactView( {
        model: contact,
        template: that.template,
        tagName: 'li'
      });

      // rendered the view and appended it to 'contact-cards'
      that.$('#contact-cards').append(contactView.render().el);
      // listenTo showdetails, listens to instances of ContactView
      that.listenTo(contactView, "showDetails", that.showModal);
    });
    return this; /* returning this view object so that we can chain, like if we did myView.render().el */
  },
  events: {
    "click .btn-save" : "addContact",
    "click .btn-cancel" : "clearFormData"
  },
  getFormData: function() {
    var formName = this.$("input[name=name]").val();
    this.$("input[name=name]").val('');

    var formEmail = this.$("input[name=email]").val();
    this.$("input[name=email]").val('');

    var formPhone = this.$("input[name=phone]").val();
    this.$("input[name=phone]").val('');

    return {
      name: formName,
      email: formEmail,
      phone: formPhone
    };
  },
  addContact: function() {
    var contact = new Contact(this.getFormData());

    this.model.add(contact);
  },
  clearFormData: function() {
    this.$("input[name=name]").val('');
    this.$("input[name=email]").val('');
    this.$("input[name=phone]").val('');
  },
  // fill modal info - clears old details, gets info of clicked contact, show modal
  showModal: function(contact) {
    $("#contact-details").empty();

    console.log(contact);

    // model: contact
    var render = function(contact) {

      var templateText = $('#tmpl-contact-details').html();

      var templateObject = _.template(templateText);

      var compiledHTML = templateObject(contact.toJSON());

      $("#contact-details").append(compiledHTML);
    };
    return this;
  },
  // hide modal
  hideModal: function() {

  },
  // other click
  clickElsewhere: function() {

  }
});

export default RolodexView;

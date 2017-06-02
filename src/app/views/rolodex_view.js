import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view.js';
import Contact from '../models/contact.js';
// import ContactDetailView from './contact_detail_view.js';

var RolodexView = Backbone.View.extend( {
  initialize: function(params) {
    this.template = params.template;
    console.log(this.el);
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    // clear container
    this.$("#contact-cards").empty();
    // saved reference to 'this'
    var that = this;
    // looped through collection
    this.model.each(function(contact) {
      // created a new view for each contact
      var contactView = new ContactView( {
        model: contact,
        template: that.template,
        class: "contact-card small-11 medium-4 large-2 medium-offset-1 columns",
        tagName: "li"
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
    "click .btn-cancel" : "clearFormData",
    "click" : "hideModal"
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
  // // I wrote the showModal function below first, which uses the ContactDetailView. Would be good if the modal will be edited, or deleted
  // // fill modal info - clears old details, gets info of clicked contact, show modal
  // showModal: function(contact) {
  //   // alert("I DID IT! ALMOST");
  //   $("#contact-details").empty();
  //   //
  //   // console.log(contact);
  //
  //   var contactDetailView = new ContactDetailView( {
  //     model: contact,
  //     template: this.template,
  //     tagName: "li"
  //   });
  //
  //   var templateText = $('#tmpl-contact-details').html();
  //   var templateObject = _.template(templateText);
  //   var compiledHTML = templateObject(contact.toJSON());
  //   $("#contact-details").append(compiledHTML);
  //
  //   return this;
  //
  // },
  showModal: function(contact) {
    this.$("#contact-details").empty();

    this.$("#contact-details").show();
    var contactDetail = new ContactView( {
      model: contact,
      template: _.template($("#tmpl-contact-details").html()),
    });
    this.$("#contact-details").append(contactDetail.render().el);
    return this;
  },
  // hide modal
  hideModal: function() {
    this.$("#contact-details").hide();
  },
  // other click
  clickElsewhere: function() {

  }
});

export default RolodexView;

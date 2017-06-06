import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view';
import Contact from '../models/contact';
import RolodexView from '../views/rolodex_view';

// this view is responsble for the  modal box
var DetailsView = Backbone.View.extend({

  initialize: function(params) {
    this.templateDetails = params.templateDetails;
    // this.listenTo(this.model, "change", completeUpdate);
    // console.log(this);
  },

  render: function() {
    var compiledTemplate = this.templateDetails(this.model.toJSON());
    this.$el.html(compiledTemplate);
    $('div.details').show();
    $('div.edit-form').hide();
    this.$el.show();
    return this;
  },

  events: {
    'click .btn-delete': "deleteContact",
    'click .btn-edit': "editForm",
    'click .btn-update': "updateContact",
    'click .btn-cancel': "cancelEdit",
    'click .btn-close': "closeView"
    // 'click .contact-card': "destroyCurrentView"
  },

  // running a loop for multiple views? happens when you click directly between cards
  deleteContact: function(event) {
    console.log("model below will be deleted");
    console.log(this.model);
    event.stopPropagation();
    this.$el.empty();
    // this.hide();
    // console.log("this model will be deleted");
    // console.log(this.model);
    // this.model.destroy();
  },

  editForm: function(event) {
    // event.stopPropagation();

    console.log("you want to edit this contact");
    $('div.details').hide();
    $('div.edit-form').show();

    this.$("#name-edit").val(this.model.attributes.name);
    this.$("#phone-edit").val(this.model.attributes.phone);
    this.$("#email-edit").val(this.model.attributes.email);
  },

  updateContact: function(event) {
    this.model.attributes.name = this.$("#name-edit").val();
    this.model.attributes.phone = this.$("#phone-edit").val();
    this.model.attributes.email = this.$("#email-edit").val();
    this.render();
    return false;
  },

  cancelEdit: function(event) {
    $('div.details').show();
    $('div.edit-form').hide();
    return false;
  },

  hide: function() {
    this.$el.hide();
  },

  closeView: function(event) {
    console.log("destory the view");
    this.remove();
  }
});

export default DetailsView;

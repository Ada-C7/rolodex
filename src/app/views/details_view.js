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
  },

  render: function() {
    console.log(this);
    var compiledTemplate = this.templateDetails( this.model.toJSON() );
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click .btn-delete': "deleteContact",
    'click .btn-edit': "editForm",
    'click .btn-update': "updateContact",
    'click .btn-cancel': "cancelEdit",
    'click .edit-form': "preventHide",
    'click': 'hide'
  },

  deleteContact: function(event) {
    event.stopPropagation();
    console.log("want to delete contact");
    console.log(this.model);
    this.model.destroy();
    this.hide();
  },

  editForm: function(event) {
    event.stopPropagation();

    console.log("you want to edit this contact");
    $('div.details').hide();
    $('div.edit-form').show();

    this.$("#name-edit").val(this.model.attributes.name);
    this.$("#phone-edit").val(this.model.attributes.phone);
    this.$("#email-edit").val(this.model.attributes.email);
  },

  updateContact: function(event) {
    event.stopPropagation();

    this.model.set( { name: this.$("#name-edit").val() } );
    this.model.set( { phone: this.$("#phone-edit").val() } );
    this.model.set( { email: this.$("#email-edit").val() } );

    this.render();
    $('div.edit-form').hide();
  },

  cancelEdit: function(event) {
    // or you could render this view again...
    $('div.details').show();
    $('div.edit-form').hide();
    return false;
  },

  preventHide: function(event) {
    event.stopPropagation();
  },

  hide: function(event) {
    // event.stopPropagation();
    console.log("kill the zombie view");
    // this.trigger("removeView");
    this.$el.hide();

    this.model.unbind( 'change', this.render, this );
    this.unbind();
    this.remove();

    delete this.$el;
    delete this.el;

    $('#contact-details').hide();
  }
});

export default DetailsView;

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
    'click .btn-cancel': "cancelEdit"
  },

  deleteContact: function(event) {
    event.stopPropagation();
    this.hide();
    this.model.destroy();
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
    // or you could render this view again...
    $('div.details').show();
    $('div.edit-form').hide();
    return false;
  },

  hide: function() {
    this.$el.hide();
  }
});

export default DetailsView;

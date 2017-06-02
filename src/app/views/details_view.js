import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view';
import Contact from '../models/contact';
import RolodexView from '../views/rolodex_view';

// this view is responsble for the  modal box
var DetailsView = Backbone.View.extend({

  initialize: function(params) {
    // this.contact = params.contact
    this.templateDetails = params.templateDetails;
    console.log(this);
  },

  render: function(){
    var compiledTemplate = this.templateDetails(this.model.toJSON());
    this.$el.html(compiledTemplate);
    this.$el.show();
    return this;
  },

  events: {
    'click .btn-delete': "deleteContact",
    'click .btn-edit': "editContact"
  },

  deleteContact: function(event){
    event.stopPropagation();
    console.log("you want to delete this contact");
    this.hide();
    this.model.destroy();
  },

  editContact: function(event){
    event.stopPropagation();
    console.log("you want to edit this contact");
    this.trigger("fillInForm", this)
    this.hide();
  },

  hide: function(){
    this.$el.hide();
  }
});

export default DetailsView;

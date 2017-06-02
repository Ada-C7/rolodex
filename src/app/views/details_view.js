import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from '../views/contact_view';
import Contact from '../models/contact';
import RolodexView from '../views/rolodex_view';

// the RolodexView includes the cards but also adding new cards - save/cancel button)
// and displaying the details
var DetailsView = Backbone.View.extend({

  initialize: function(params) {
    // this.contact = params.contact
    this.templateDetails = params.templateDetails;
    console.log(this);
  },

  render: function(){
    var compiledTemplate = this.templateDetails(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click .btn-delete': "deleteContact",
    'click .btn-edit': "editContact"
  },

  deleteContact: function(event){
    event.stopPropagation();
    console.log("you want to delete this contact");
    this.model.destroy();
    $("#contact-details").hide();
  }

});

export default DetailsView;

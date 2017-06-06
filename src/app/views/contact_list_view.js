import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from 'contact_view.js';

var ContactListView = Backbone.View.extend ( {
  initialize: function(params) {
    this.template =
    params.template;

    this$el.addClass("contact-item column column-block");
  },

  render: function() {
    //clear the todo items
    this.$('#contact-cards').empty();
    //saved a reference to `this`
    var that = this;

    //looped through the collection
    this.model.each(function(contact) {
      //created a new view for each contact
      var contactView = new ContactView({
        model: contact,
        template: that.template
      });
      //rendered the view and appended it to contact names
      that.$("#contact-cards").append(contactView).render().$el);

    });

    return this;
  }

});

//code will take contact list, loop trhu and generate a new contact `view` for each contact entry in the list
var renderList = function(contactList) {
  // Clears the list then later adds data back into the section -
  $("#contact-cards").empty();
  // Loop Through rendering each contact
  contactList.each(function(contact) {
    // Create a ContactView - creating a "controller" view
    //associated with model
    var contactView = new ContactView({
      //tell them which model they are associated with
      model: contact, // get model
      // give it its template so it know how to display that model
      template: _.template( $('#tmpl-contact-card').html() )
    });
    // Render the View
    // Then append the result
    // to the DOM
    $("#contact-cards").append(contactView.render().el);
  });
};

export default ContactListView;

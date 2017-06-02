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
    this.$('contacts').empty();
    //saved a reference to `this`
    var that = this;

    //looped through the collection
    this.model.each(function(contact) {
      //created a new view for each contact
      var contactView = new ContactView({
        model: contact,
        template: this.template
      });
      //rendered teh view and appended it to todo items
      that.$(".contacts").append(contactView).render().$el);

    });

    return this;
  }

});

export default ContactListView;

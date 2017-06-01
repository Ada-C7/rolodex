import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import ContactView from './contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.contactTemplate = params.contactTemplate;
  },
  render: function() {
    var self = this;

    self.$('.contact-cards').empty();

    self.model.each(function(contact) {

      var contactView = new ContactView( {
        model: contact,
        template: self.contactTemplate
      });

      self.$('.contact-cards').append(contactView.render().$el);
    });
    return this;
  }
});

export default RolodexView;

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from './contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    var self = this;
    self.$('#contact-cards').empty();
    self.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: self.template
      });
      self.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  },
  event: {
    'click .btn-save': 'addContact',
    'click .btn-cancel': 'clearForm'
  },
  
});

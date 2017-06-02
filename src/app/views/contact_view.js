import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;


    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    this.$('#contact-cards').empty();

    var that = this;
    this.model.each(function(contact) {
      var contactView = new ContactView({
        model: contact,
        template: that.template,
        tagName: 'li'
      });
      that.$('#contact-cards').append(contactView.render().$el);
    });
    return this;
  }
});

export default ContactView;

// var renderList = function(contactList) {
//   $('#contact-cards').empty();
//
//   contactList.each(function(contact) {
//     var contactView = new ContactView({
//       model: contact,
//       template: _.template($('#tmpl-contact-card').html()),
//       // tagName: 'li'
//     });
//     $('#contact-cards').append(contactView.render().el);
//   });
// };

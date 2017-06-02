import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var ContactDetailsView = Backbone.View.extend({
    initialize: function(args){
      this.template = _.template($('#tmpl-contact-details').html());
      this.element = $('#contact-details');
    },

    render: function() {
      var html = this.template(this.model.toJSON());

      this.$el.html(html);

      this.element.empty();
      this.element.append(this.$el);
      return this;
    },

    show: function() {
      this.element.show();
    }
 });

 export default ContactDetailsView;

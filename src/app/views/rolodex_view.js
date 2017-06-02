import Backbone from 'backbone';
import $ from 'jquery';
import Contact from '../models/contact';
import ContactView from 'views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(params) {
  console.log("this is " + params);
   this.template = _.template($('#tmpl-contact-card').html());
  }
});

export default RolodexView;

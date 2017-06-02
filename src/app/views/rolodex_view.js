import Backbone from 'backbone';
import $ from 'jquery';
import Contact from '../models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(params) {
  console.log("this is " + params);
  }
});

export default RolodexView;

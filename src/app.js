import _ from 'underscore';
import $ from 'jquery';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});




$(document).ready(function(){

});

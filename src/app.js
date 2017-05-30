import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

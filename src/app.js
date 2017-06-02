import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';

var contactData = [
  {
    name: 'Ellen Ochoa',
    phone: '555-555-5555',
    email: 'awesomeastronaut@nasa.gov'
  }, {
    name: 'Duy-Loan Le',
    phone: '444-444-4444',
    email: 'calculatorprime@ti.com'
  }, {
    name: 'Margaret Hamilton',
    phone: '333-333-3333',
    email: 'apolloteamleader@nasa.gov'
  }, {
    name: 'Katherine Johnson',
    phone: '222-222-2222',
    email: 'humancomputer@nasa.gov'
  }
];

$(document).ready(function() {
  var rolodex = new Rolodex(contactData);

  var appView = new RolodexView({
    el: $('#application'),
    model: rolodex
  });
  appView.render();
});

$(document).click(function (event) {
  var element = $('.contact-card');
  var container = $('#contact-details')
  console.log("CLICKED!", event.target);

  // if the target of the click isn't the container, nor a descendant of the container
  if (element.is(event.target) || element.has(event.target).length > 0 )  {
    container.show();
  } else if (container.is(event.target) || container.has(event.target).length > 0) {
    container.show();
  }
   else {
    container.hide();
  }
});

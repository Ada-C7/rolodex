import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';
import ContactView from 'app/views/contact_view.js';
import RolodexView from './app/views/rolodex_view.js';

var appleTemplate;
var contactList;

var rolodexData = [
  {
    name: "Mark",
    email: "mrolling@mail.com",
    phone: "818-320-8765"
  },
  {
    name: "April",
    email: "acurray@mail.com",
    phone: "213-913-7766"
  },
  {
    name: "Nancy",
    email: "nroberts@mail.com",
    phone: "562-699-9109"
  },
  {
    name: "Fructuoso",
    email: "fdelosangeles@mail.com",
    phone: "706-432-5555"
  }
];

$(document).ready(function(){
  appleTemplate = _.template($("#tmpl-contact-card").html());
  contactList = new Rolodex(rolodexData);

  var rolodexView = new RolodexView({
    rolodexTemplate: appleTemplate,
    model: contactList,
    el: $("#application")
  });
  rolodexView.render();
})

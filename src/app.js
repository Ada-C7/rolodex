
import $ from 'jquery';
import _ from 'underscore';
import Contact from './app/models/contact.js';
import Rolodex from './app/collections/rolodex.js';
import RolodexView from './app/views/rolodex_view.js';

// hide modal box from the main page
$('#contact-details').hide();

// Static data
var myContacts = [
    {name: "Rana Sulaiman",
    email: "rs_sulaiman@yahoo",
    phone: '435-333-777'
  },
  {name: "Laith Sailik",
  email: "hike444@yahoo",
  phone: '435-343-7856'
  }
];

// Creating Collection from static data- Wave2
var rolodexList = new Rolodex(myContacts);

$(document).ready(function() {
  console.log(myContacts);
  var myRolodexView = new RolodexView({
  model: rolodexList,
  template: _.template($("#tmpl-contact-card").html()),
  el: 'body'
  });

  myRolodexView.render();

});

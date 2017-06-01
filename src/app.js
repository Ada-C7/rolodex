import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact.js';
import Rolodex from 'app/collections/rolodex.js';
import ContactView from 'app/views/contact_view.js';
import RolodexView from 'app/views/rolodex_view.js';

var myContacts = [
  { name: "Dwight Schrute",
    email: "schrutefarms@gmail.com",
    phone: "111-111-1111"
  },
  {
    name: "Jim Halpert",
    email: "jim@athlead.com",
    phone: "222-222-2222"
  },
  {
    name: "Pam Beasley",
    email: "Pam@prattinstitute.com",
    phone: "333-333-3333"
  },
  {
    name: "Michael Scott",
    email: "mscott@greatscottproductions.com",
    phone: "444-444-4444"
  },
  {
    name: "Kelly Kapoor",
    email: "kkapoor@businessbitch.com",
    phone: "555-555-5555"
  },
  {
    name: "Ryan Howard",
    email: "rhoward@wupf.edu",
    phone: "666-666-6666"
  },
  {
    name: "Andy Bernard",
    email: "narddog@cornell.edu",
    phone: "777-777-7777"
  },
  {
    name: "Kevin Malone",
    email: "bigbog69@fanduel.com",
    phone: "888-888-8888"
  },
  {
    name: "Angela Martin",
    email: "msmartin@lipton4PA.com",
    phone: "999-999-9999"
  },
  {
    name: "Toby Flenderson",
    email: "chadflenderson@flendersonfiles.com",
    phone: "1-111-111-1111"
  },
  {
    name: "Creed Bratton",
    email: "notcreedbratton@creedthoughts.gov",
    phone: "2-222-222-2222"
  },
  {
    name: "David Wallace",
    email: "dwallace@suckit.com",
    phone: "3-333-333-3333"
  }
];

var myRolodex = new Rolodex(myContacts);

$(document).ready(function() {

  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: 'div#application'
  });

  myRolodexView.render();

  $('.scroll_navigation ul li').on('click', function(){
    $('html,body').animate({scrollTop: $(this).offset().top}, 800);
  });
});

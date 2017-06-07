import $ from 'jquery';
import _ from 'underscore';

import contact from './app/models/contact.js';
import contactView from './app/views/contact_view.js';

import Rolodex from './app/collections/rolodex.js';
import RolodexView from './app/views/rolodex_view.js';

var myContacts = [
  { name: "Dwight Schrute",
    email: "schrutefarms@gmail.com",
    phone: "111-111-1111",
    image: "imgs/dwight.png"
  },
  {
    name: "Jim Halpert",
    email: "jim@athlead.com",
    phone: "222-222-2222",
    image: "imgs/jim.png"
  },
  {
    name: "Pam Beasley",
    email: "Pam@prattinstitute.com",
    phone: "333-333-3333",
    image: "imgs/pam.png"
  },
  {
    name: "Michael Scott",
    email: "mscott@greatscottproductions.com",
    phone: "444-444-4444",
    image: "imgs/michael.png"
  },
  {
    name: "Kelly Kapoor",
    email: "kkapoor@businessbitch.com",
    phone: "555-555-5555",
    image: "imgs/kelly.png"
  },
  {
    name: "Andy Bernard",
    email: "narddog@cornell.edu",
    phone: "777-777-7777",
    image: "imgs/andy.png"
  },
  {
    name: "Kevin Malone",
    email: "bigbog69@fanduel.com",
    phone: "888-888-8888",
    image: "imgs/kevin.png"

  },
  {
    name: "Angela Martin",
    email: "msmartin@lipton4PA.com",
    phone: "999-999-9999",
    image: "imgs/angela.png"
  },
  {
    name: "Creed Bratton",
    email: "notcreedbratton@creedthoughts.gov",
    phone: "2-222-222-2222",
    image: "imgs/creed.png"
  }
  // {
  //   name: "Toby Flenderson",
  //   email: "chadflenderson@flendersonfiles.com",
  //   phone: "1-111-111-1111",
  //   image: "imgs/toby.png"
  // },
  // {
  //   name: "David Wallace",
  //   email: "dwallace@suckit.com",
  //   phone: "3-333-333-3333",
  //   image: "imgs/david.png"
  // }
  // {
  //   name: "Ryan Howard",
  //   email: "rhoward@wupf.edu",
  //   phone: "666-666-6666",
  //   image: "imgs/ryan.png"
  // },
];

var myRolodex = new Rolodex(myContacts);

$(document).ready(function() {

  var myRolodexView = new RolodexView({
    model: myRolodex,
    template: _.template($('#tmpl-contact-card').html()),
    el: '#application'
  });

  myRolodexView.render();

  $('#contact-details').hide();
});

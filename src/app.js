import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

var templateDetails;
var templateCard;

var contacts = [{
  name: "Cyn",
  phone: "123-456-7890",
  email: "cyn@test.com"
}, {
  name: "chris",
  phone: "987-654-3211",
  email: "test@test.com"
}];

var rolodex = new Rolodex(contacts);

$(document).ready(function() {
  templateCard = _.template($('#tmpl-contact-card').html());
  templateDetails = _.template($('#tmpl-contact-details').html());

  var rolodexView = new RolodexView({
    model: rolodex,
    templateCard: templateCard,
    templateDetails: templateDetails,
    el: 'body'
  });

  rolodexView.render();
});

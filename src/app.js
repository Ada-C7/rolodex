import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';

var contactTemplate;


$(document).ready(function() {
  contactTemplate = _.template($("tmpl-contact-card").html());
  contactDetails = _.template($("tmpl-contact-details").html());
});

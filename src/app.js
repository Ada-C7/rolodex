import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';

var myContact = new Contact({
  name: "Sofia",
  e_mail: "sofia@adadevelopers.com",
  phone_number: "222-222-2222"
});

$(document).ready(function() {


  console.log(myContact.get("name") +  " : " + myContact.get("e_mail") + myContact.get("phone_number"));

});

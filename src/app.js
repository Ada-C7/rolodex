import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';

var myContact = new Contact({
  name: "Ada Lovelace",
  phone_number: "(416) 733-2221",
  email: "Ada@adadevelopersacademy.org"
});

$(document).ready(function() {

  console.log("Name: " + myContact.get("name") +  " Phone Number:" + myContact.get("phone_number") + " Email: " + myContact.get("email"));

});

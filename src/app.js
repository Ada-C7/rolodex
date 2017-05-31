import $ from 'jquery';
import Contact from 'app/models/contact';
import _ from "underscore";

var myContact = new Contact({
  name: "Leonardi Davinci",
  phone_number: "(111)-111-1111",
  email: "leodavinci@gioconda.com"
});

$(document).ready(function() {


  console.log("Name: " + myContact.get("name") +" "+ "Phone Number: " + myContact.get("phone_number") +" "+ "Email: "+ myContact.get("email"));

});

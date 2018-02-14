import { promise } from './../js/bike.js';

$(document).ready(function() {
  let distance;
  let location;
  let perPage;

  $('#bike-form').submit(function(event) {
    event.preventDefault();
    let distance = $('#distance').val();
    let location = $('#location').val();
    let perPage = $('#per-page').val();
    let newSearch = promise(perPage, location, distance);

    newSearch.then(function(response) {
      let body = JSON.parse(response);
      // $('#result').text(body.bikes[i].title);
      for (let i = 0; i < body.bikes.length; i++) {
        $('#result').append("<li>" + body.bikes[i].title + "</li>");
      }
    }, function(error) {
      $('.showErrors').text(`There was an error: ${error.message}`);
    });
  });
});

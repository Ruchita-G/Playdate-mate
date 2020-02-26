// The code in add.js handles what happens when the user clicks the "Add a  new Playdate" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newPlaydate object
  var newPlaydate = {
    name: $("#name").val().trim(),
    age: $("#age").val().trim(),
    gender: $("#gender").val().trim(),
    zipcode: $("#zipcode").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newPlaydate)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#age").val("");
  $("#gender").val("");
  $("#zipcode").val("");

});

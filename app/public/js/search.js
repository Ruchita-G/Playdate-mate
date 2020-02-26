// When user hits the search-btn
$("#search-btn").on("click", function (event) {
  event.preventDefault();

  // Save the playdate they typed into the playdate-search input
  var playdateSearched = $("#playdate-search").val().trim();

  // Make an AJAX get request to our api, including the user's playdate in the url
  $.get("/api/" + playdateSearched, function (data) {

    console.log(data);
    // Call our renderPlaydates function to add our playdates to the page
    renderPlaydates(data);

  });

});

// When user hits the age-search-btn
$("#age-search-btn").on("click", function () {

  // Save the age they typed into the age-search input
  var ageSearched = $("#age-search").val().trim();

  // Make an AJAX get request to our api, including the user's age in the url
  $.get("/api/age/" + ageSearched, function (data) {

    // Log the data to the console
    console.log(data);
    // Call our renderPlaydates function to add our playdates to the page
    renderPlaydates(data);

  });

});

// When user hits the gender-search-btn
$("#gender-search-btn").on("click", function () {

  // Save the playdate they typed into the gender-search input
  var genderSearched = $("#gender-search").val().trim();

  // Make an AJAX get request to our api, including the user's gender in the url
  $.get("/api/gender/" + genderSearched, function (data) {

    console.log(data);
    // Call our renderPlaydates function to add our playdates to the page
    renderPlaydates(data);

  });

});

$("#zipcode-search-btn").on("click", function () {

  // Save the playdate they typed into the gender-search input
  var zipcodeSearched = $("#zipcode-search").val().trim();

  // Make an AJAX get request to our api, including the user's gender in the url
  $.get("/api/zipcode/" + zipcodeSearched, function (data) {

    console.log(data);
    // Call our renderPlaydates function to add our playdates to the page
    renderPlaydates(data);

  });

});

function renderPlaydates(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].name + "</h2>");
      div.append("<p>Age: " + data[i].age + "</p>");
      div.append("<p>Gender: " + data[i].gender + "</p>");
      div.append("<p>Zipcode: " + data[i].zipcode + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE playdate</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function () {

      $.ajax({
        method: "DELETE",
        url: "/api/playdate/" + $(this).attr("data-id")
      })
        // On success, run the following code
        .then(function () {
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}

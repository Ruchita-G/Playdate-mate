
// Make a get request to our api route that will return every playdate
$.get("/api/all", function(data) {
  // For each playdate that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold playdate data
    var mateSection = $("<div>");
    // Add a class to this div: 'mate'
    mateSection.addClass("mate");
    // Add an id to the mate to mark which mate it is
    mateSection.attr("id", "playdate-mate-" + i);
    // Append the mate to the mate section
    $("#mate-section").append(mateSection);

    // Now  we add our playdate data to the mate we just placed on the page
    $("#playdate-mate-" + i).append("<h2>" + (i + 1) + ". " + data[i].name + "</h2>");
    $("#playdate-mate-" + i).append("<h3>Age: " + data[i].age + "</h4>");
    $("#playdate-mate-" + i).append("<h3>Gender: " + data[i].gender + "</h4>");
    $("#playdate-mate-" + i).append("<h3>Zipcode: " + data[i].zipcode + "</h4>");
  }
});

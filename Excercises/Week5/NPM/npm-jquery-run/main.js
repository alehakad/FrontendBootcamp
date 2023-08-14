const urllib = require("urllib");

// $(document).ready(function () {
//   // Add a click event listener to the div with ID "small_id"
//   $("#small-id").on("click", function () {
//     // Generate a random color in hexadecimal format
//     const newColor = "#f39c12";

//     // Apply the random color as the background color of the div
//     $(this).css("background-color", newColor);
//   });
// });

console.log("Make request");
urllib.request(
  "http://data.nba.net/10s/prod/v1/2016/players.json",
  function (err, response) {
    if (err) {
      console.error("Error occurred:", err);
    } else {
      console.log(response.toString());
    }
  }
);
console.log("Finish request");

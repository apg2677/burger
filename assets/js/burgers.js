
$(document).ready(function() {
  $("#btnSubmit").on("click", function(event) {
    alert("Submit!");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
   
    var newBurger = {
      name: $("#bn").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
}); 

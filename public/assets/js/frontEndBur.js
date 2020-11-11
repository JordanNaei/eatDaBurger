// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // Add a new burger.
    $("#addNewBur").on("click", function (event) {
        event.preventDefault();
        const burgerUserInput = $("#userBurInput").val().trim();
        if (burgerUserInput === '') {
            alert("Please enter a valid burger number")
        } else {
            var newBurObj = {
                burger_name: $("#userBurInput").val().trim(),
                devoured: 0
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurObj
            }).then(function () {
                console.log("Added new burger");
                // Reload the page to get the updated burger list.
                location.reload();
            });
        }
    });



    $(".devourBur").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredNewState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredNewState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });
    });

    // Delete Route 
    $(".deleteBur").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})
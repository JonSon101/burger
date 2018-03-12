$(function() {
    $(".create-burger").on("submit", function(event) {
        //console.log("burger.js create-burger")
        event.preventDefault();

        var newBurger = {
            burgerName: $("#burgerName").val().trim()
        };

        //console.log("newBurger: ", newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                //console.log("created new burger");

                location.reload();
            }
        )
    });

    $(".devour").on("click", function(event) {
        var id = $(this).data("id");

        var newDevouredState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevouredState);

                location.reload();
            }
        );
    });

    $(".delete-burger"). on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function() {
                console.log("deleted burger", id);

                location.reload();
            }
        );
    });
});
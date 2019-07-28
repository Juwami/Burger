let burgerName = $("#burger-name");

// burger-name is from input
$("#submitBtn").on("click", function (e) {
    e.preventDefault();

    if (burgerName !== "") {

        let burger = {
            burger_name: burgerName.val().trim()
        }
        // console.log("Burger Name:", burger.burger_name)

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(function () {
            // console.log("Added New Burger");
            location.reload();
        })
    }
});

$(".eat-burger").on("click", function () {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
            devoured: 1
        }
    }).then(function () {
        location.reload();
    })
})

$(".digest-burger").on("click", function () {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(function () {
        location.reload();
    })
})
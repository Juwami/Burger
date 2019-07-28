// burger-name is from input
$("#submitBtn").on("click", function (e) {
    e.preventDefault();

    let burger = {
        burger_name: $("#burger-name").val().trim()
    }
    // console.log("Burger Name:", burger.burger_name)

    $.ajax("/api/burgers", {
        type: "POST",
        data: burger
    }).then(function() {
        // console.log("Added New Burger");
        location.reload();
    })
});

$(".eat-burger").on("click", function () {
    let id = $(this).data("id");

    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: {
            devoured: 1
        }
    }).then(function () {
        location.reload();
    })
})

$(".digest-burger").on("click", function () {
    console.log("digest")
})
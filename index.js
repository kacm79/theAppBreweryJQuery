
$("h1").addClass("big-heading");

$("h1").removeClass("underline");

// $("button").text("Press me");

$("a").attr("href", "https://www.yahoo.com")

$("body").keypress(function(event) {
    $("h1").text(event.key);
})
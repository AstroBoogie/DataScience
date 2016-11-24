// fast Click
$(function() {
    FastClick.attach(document.body);
});

// Page Enter Transition
var pageArray = window.location.pathname.split("/");
var pageName = pageArray[pageArray.length - 1];

if (pageName == "schedule.html") {
    $("body > *").css("opacity", 0);
    $("body > *").animate({
        opacity: "1"
    }, 150);
}

// Page Leave Transition
$(".button-object").click(function () {
    var clickedObject = $(this);

    var destination = clickedObject.attr('id').split("-")[1];
    console.log(destination);

    $("#background-container").animate({
        opacity: "1"
    }, 150);

    $("body > *").not("body > #background-container").animate({
        opacity: "0"
    }, 150, function() {
        window.location = destination + ".html";
    });

});


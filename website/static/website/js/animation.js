$(document).ready(function () {
    $("#contactButton").click(function() {
        $("#homeTab").animate({
            left: '-150%',
        }, 500);
        $("#contactTab").animate({
            left: '0%',
        }, 500);
    });
    $("#homeButton").click(function() {
        $("#homeTab").animate({
            left: '0%',
        }, 500);
        $("#contactTab").animate({
            left: '150%',
        }, 500);
    });
});
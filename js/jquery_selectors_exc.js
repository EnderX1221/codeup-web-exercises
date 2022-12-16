"use strict";

$(function() {
    alert($("#codeup").html());
     alert($("#main").html());

     $(".codeup").css("border", "12px solid blue");

    $("li").css("font-size", "30px");
     $("h1").css("background", "green");
     $("p").css("background", "yellow");
     alert($("h1").html());
     console.log($("h1").html());

    $("h1, p, li").css("background-color", "blue");
});
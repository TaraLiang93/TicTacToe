/**
 * Created by tara on 2/5/16.
 */

$(document).ready(function () {

    $("#leaderBoard").click(function () {
        $(location).attr("href", "../jsp/leaderboard.jsp");

        //window.location  = "../jsp/leaderboard.jsp";
    });

    $("#signIn").click(function () {
        $(location).attr("href", "/LogIn");
    });

    $("#play").click(function () {
        $(location).attr("href", "/play");
    })

    //alert($(this).text()); // display the text of the button
    //alert($(this).attr("id"));//getting the id of button

});


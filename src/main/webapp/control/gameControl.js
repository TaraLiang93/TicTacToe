/**
 * Created by tara on 2/5/16.
 */

var AI = "X";
var user = "O";
var random = Math.round(Math.random());         //0 == AI, 1== User, O==first, X==last
var total = 0;                                 //count of total move by both AI and user || 10 means user wins, 11 means AI wins, 8 means tie.
var num = 5;                                    //count how many iterations did the setinterval repeat.
var setIntID;                                   //store the id of the set interval id, its needed to clear the interval


function playAgain(decision, userWin) {

    if (decision === true) {
        window.location = "/jsp/gameBoard.jsp";
    }
    if (userWin === true) {
        $.post("/UpdateScore"); //update the user's score in datastore
    }
}

function AIMove() {
    var move = numGen();
    console.log(document.getElementById(move).innerHTML);
    while ((getInnerHTML(move) != "")) {  //Cannot chose this box to place
        move = numGen();
    }
    document.getElementById(move).innerHTML = AI;
    total++;
    if (checkWin(move) === true) {
        total = 11;
        playAgain(confirm("You Loss! Do You want to play again?"), false);
    }
    if (total === 9) {
        playAgain(confirm("Tie! Do You want to play again?"), false);
    }
}

function numGen() {
    var move = Math.floor(Math.random() * 10);
    while (move === 9) {
        move = Math.round(Math.random() * 10);
    }
    return move;
}

function getInnerHTML(temp) {
    return document.getElementById(temp).innerHTML;
}

function vertCheck(toBeCheck) {
    var XorO = document.getElementById(toBeCheck).innerHTML;
    if ((( (getInnerHTML(0) === getInnerHTML(3)) === (getInnerHTML(0) === getInnerHTML(6)) ) && (getInnerHTML(0) === XorO) && ((getInnerHTML(0) === getInnerHTML(3)) === true))
        || (((getInnerHTML(1) === getInnerHTML(4)) === (getInnerHTML(1) === getInnerHTML(7))) && (getInnerHTML(1) === XorO) && ((getInnerHTML(1) === getInnerHTML(4)) === true))
        || (((getInnerHTML(2) === getInnerHTML(5)) === (getInnerHTML(2) === getInnerHTML(8))) && (getInnerHTML(2) === XorO)) && (getInnerHTML(2) === getInnerHTML(5)) === true) {
        return true;
    }
    return false;
}

function horzCheck(toBeCheck) {
    var XorO = getInnerHTML(toBeCheck);
    if ((( (getInnerHTML(0) === getInnerHTML(1)) === (getInnerHTML(0) === getInnerHTML(2)) ) && (getInnerHTML(0) === XorO) && (( (getInnerHTML(0) === getInnerHTML(1)) === true))
        || (((getInnerHTML(3) === getInnerHTML(4)) === (getInnerHTML(3) === getInnerHTML(5))) && (getInnerHTML(3) === XorO) && ((getInnerHTML(3) === getInnerHTML(4)) === true)))
        || (((getInnerHTML(6) === getInnerHTML(7)) === (getInnerHTML(6) === getInnerHTML(8))) && (getInnerHTML(6) === XorO)) && (getInnerHTML(6) === getInnerHTML(7)) === true) {
        return true;
    }
    return false;
}

function diagCheck(toBeCheck) {
    var XorO = getInnerHTML(toBeCheck);
    if ((( (getInnerHTML(0) === getInnerHTML(4)) === (getInnerHTML(0) === getInnerHTML(8)) ) && (getInnerHTML(0) === XorO) && (getInnerHTML(0) === getInnerHTML(4)) === true)
        || (((getInnerHTML(2) === getInnerHTML(4)) === (getInnerHTML(2) === getInnerHTML(6))) && (getInnerHTML(2) === XorO)) && (getInnerHTML(2) === getInnerHTML(4)) === true) {
        return true;
    }
    return false;
}

function checkWin(location) {
    var vert = vertCheck(location);
    var horz = horzCheck(location);
    var diag = diagCheck(location);
    var finalCheck = (vert || horz || diag);
    if (finalCheck === true) {
        return true;
    }
    //var location = $(this).attr("id");
}

function countDown() {
    setIntID = setInterval(printToCountDown, 1000);
}

function printToCountDown() {
    document.getElementById("4").innerHTML = num;
    if (num == 0) {
        document.getElementById("4").innerHTML = "";
        clearInterval(setIntID);
        num = 1;
        $(".board button").prop("disabled", false);
        if (AI === "O") {
            AIMove();
        }

    }
    num--;

}


$(document).ready(function () {
    $(".board button").prop("disabled", true);
    countDown();

    document.getElementById("userName").style.visibility = "hidden";
    if (random === 0) {
        document.getElementById("O").innerHTML = "O: Computer Goes First!";
        document.getElementById("X").innerHTML = "X: " + document.getElementById("userName").innerHTML;
        AI = "O";
        user = "X";
    }


    $(".sign-out").click(function () {
        $(location).attr("href", "/LogOut");
    });

    $(".leaderBoard").click(function () {
        var leave = confirm("Are you sure, if you leave all the data will be lost.");
        if (leave === true) {
            //$.post("/GetScore"); //get all the users score in datastore
            window.location = "/jsp/leaderboard.jsp";
        }
    });

    $(".board button").click(function () {
        if (total > 9) {
            playAgain(confirm("Game Ended! Do you want to play again?"), false);

        }
        else if (($(this).text() != "")) {  //Cannot chose this box to place
            alert("This box is taken! Please chose another one.");
        }
        else {
            $(this).text(user);
            total++;
            var location = $(this).attr("id");
            if (checkWin(location) === true) {
                total = 10;
                playAgain(confirm("You Win! Do You want to play again?"), true);
                //$.post("/UpdateScore"); //update the user's score in datastore
            }
            if (total === 9) {
                playAgain(confirm("Tie! Do You want to play again?"), false);
            }
            if (total < 9) {
                AIMove();
            }
        }
    });


    //alert($(this).text()); // display the text of the button
    //alert($(this).attr("id"));//getting the id of button

});


$(document).ready(function() {

var budget = 0;
var notice = "";
var wins = 0;
var losses = 0;
var totalMoney = 0;
var presentAValue = $("#presentADiv").val();
var presentBValue = $("#presentBDiv").val();
var presentCValue = $("#presentCDiv").val();
var presentDValue = $("#presentDDiv").val();
var winNotice = "You won!";
var loseNotice = "Try again.";
var roundOver = false;

var reset = function() {
    budget = Math.floor(Math.random() * (120 - 19) + 19);
    presentA = Math.floor(Math.random() * (12 - 1) + 1);
    presentB = Math.floor(Math.random() * (12 - 1) + 1);
    presentC = Math.floor(Math.random() * (12 - 1) + 1);
    presentD = Math.floor(Math.random() * (12 - 1) + 1);
    $("#moneyTotalDiv").text(totalMoney);
    $("#budgetDiv").text(budget);
    presentAValue = $("#presentADiv").val(presentA);
    presentBValue = $("#presentBDiv").val(presentB);
    presentCValue = $("#presentCDiv").val(presentC);
    presentDValue = $("#presentDDiv").val(presentD);
    totalMoney = 0;
}

reset();

var win = function() {
    wins++;
    totalMoney = 0;
    reset();
    $("#notificationDiv").text(winNotice);
    $("#winDiv").text(wins);
}

var lose = function() {
    losses++;
    totalMoney = 0;
    reset();
    $("#notificationDiv").text(loseNotice);
    $("#loseDiv").text(losses);
}

var play = function() {
    buttonID = this.id;
    buttonValue = $(this).val();
    if (totalMoney == budget) {
        win();
        reset();
    } else if (totalMoney > budget) {
        lose();
        reset();
    } else {
        totalMoney = (totalMoney * 1) + (buttonValue * 1);
        $("#moneyTotalDiv").text(totalMoney);

        if (totalMoney == budget) {
            win();
            reset();
        } else if (totalMoney > budget) {
            lose();
            reset();
        }
    }
}

$(".gift").on("click", play);

}); // End of document ready
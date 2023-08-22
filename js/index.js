"use strict";

// HOME SECTION
$("#closeBtn").click(function () {
  $("#menu-fixed").animate({ left: "-30%", opacity: "0" }, 800);
});

$(".link").click(function () {
  let section = $(this).attr("href");
  let position = $(section).offset().top;

  $("html , body").animate({ "scroll-top": position }, 1000);
});

$("#bars").click(function () {
  $("#menu-fixed").animate({ left: "0%", opacity: "1" }, 800);
});

//DETAILS SECTION
$(".contentTwo").slideUp(0);
$(".contentThree").slideUp(0);
$(".contentFour").slideUp(0);

$(".singerOne").click(function () {
  $(".contentOne").slideDown(500);
  $(".contentTwo").slideUp(500);
  $(".contentThree").slideUp(500);
  $(".contentFour").slideUp(500);
});
$(".singerTwo").click(function () {
  $(".contentTwo").slideDown(500);
  $(".contentOne").slideUp(500);
  $(".contentThree").slideUp(500);
  $(".contentFour").slideUp(500);
});
$(".singerThree").click(function () {
  $(".contentThree").slideDown(500);
  $(".contentTwo").slideUp(500);
  $(".contentOne").slideUp(500);
  $(".contentFour").slideUp(500);
});
$(".singerFour").click(function () {
  $(".contentOne").slideUp(500);
  $(".contentTwo").slideUp(500);
  $(".contentThree").slideUp(500);
  $(".contentFour").slideDown(500);
});

// DURATION SECTION
function duration(countDown) {
  let eventTime = new Date(countDown);
  eventTime = eventTime.getTime() / 1000;

  let dayTime = new Date();
  dayTime = dayTime.getTime() / 1000;

  let restTime = eventTime - dayTime;

  let days = Math.floor(restTime / (24 * 60 * 60));
  let hours = Math.floor((restTime - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor((restTime - days * (24 * 60 * 60) - hours * 3600) / 60);
  let secs = Math.floor(
    restTime - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $("#days").html(`${days} D`);
  $("#hours").html(`${hours} h`);
  $("#minutes").html(`${mins} m`);
  $("#seconds").html(`${secs} s`);

  setInterval(function () {
    duration(countDown);
  }, 1000);
}

window.onload = function () {
  duration("18 october 2023 22:00:00");
};

// VALIDATION FOR TEXTAREA
let validationText = () => {
  let regex = /^[A-Za-z ]{100,}$/i;
  let textArea = document.getElementById("textArea");
  let err = document.querySelector(".err");

  if (regex.test(textArea.value) == true) {
    console.log("true");
    err.classList.replace("d-block", "d-none");
    return true;
  } else {
    err.classList.replace("d-none", "d-block");
    console.log("false");
    return false;
  }
};

// CLEAR FORM FUNCTION
$("#btnForm").click(function () {
  $("#inputOne").val("");
  $("#inputTwo").val("");
  $("#textArea").val("");
});

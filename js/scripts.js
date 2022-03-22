$(document).ready(function () {
  $("button#green").click(function () {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function () {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function () {
    $("body").removeClass();
    $("body").addClass("red-background");
    $("body").append("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDGccbV4OZZfAFh1Z5KUVhTvC4DPdi9x32nltOPAyKJig7JJQ_eQFV8gQmhx89HzpgLc&usqp=CAU'>");
  });
});

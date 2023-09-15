$(document).ready(function() {
  
  $("#tweet-text").on("keyup", function (e) {
    textArea = $("#tweet-text");

    maxChar = 140;

    currentCharacters = $(this).val().length;

    result = maxChar - currentCharacters;
    $(this).next().children().eq(1).text(result);

    if (result < 0) {
      $(".counter").toggleClass("character-error", true);
    }

    if (result > 0) {
      $(".counter").toggleClass("character-error", false);
    }
  });

});
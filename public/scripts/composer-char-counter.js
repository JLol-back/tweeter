$(document).ready(function() {
  
  // Following each keyup event within the tweet form text area

  $("#tweet-text").on("input", function (e) {
    textArea = $("#tweet-text");

    maxChar = 140;
    
    // Update the count of characters currently within the text area

    currentCharacters = $(this).val().length;

    result = maxChar - currentCharacters;

    // Target and update the text displaying the character count on the front end.
    $(this).next().children().eq(1).text(result);

    // If character count is lower than zero or higher than the maximum, toggle on error class
    
    if (result < 0) {
      $(".counter").toggleClass("character-error", true);
    }

    if (result > 0) {
      $(".counter").toggleClass("character-error", false);
    }
  });

});
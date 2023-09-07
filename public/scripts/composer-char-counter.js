$(document).ready(function() {
  
  $("#tweet-text").on("keyup", function(e) {
 
    console.log(e.key);
    console.log(this);

    textArea = $("#tweet-text");
    console.log("text:", textArea.val(), textArea.val().length);

    maxChar = 140;
    
    currentCharacters = $( this ).val().length;

    if (e.key !== "Backspace") {
      
    result = maxChar - currentCharacters;
      $(this).next().children().eq(1).text(result);

    }

    if ((e.key === "Backspace") && (result < 140)) {
      
    ++result  
     $(this).next().children().eq(1).text(result);
 
     }

     if (result < 0) {
      $(".counter").toggleClass("character-error", true);
     }

     if (result > 0) {
      $(".counter").toggleClass("character-error", false);
     }

  } )

});




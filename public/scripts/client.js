/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

const createTweetElement = function(tweetData) {

  
//Escape function to prevent malicious XSS in tweet content

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const tweetHTML = `
        <article class="tweet">
          <header>
            <div>
              <img height="54px" src="${tweetData.user.avatars}">
              <h4>${tweetData.user.name}</h4>
            </div>
            <h4 class="handle">${tweetData.user.handle}</h4>
          </header>
            <div class="tweet-content">
              <p>${escape(tweetData.content.text)}</p>
            </div>
            <hr>
          <footer>
           <p>${timeago.format(tweetData.created_at)}</p>
           <div class="tweet-icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
           </div>
          </footer>
        </article>
        `;
  
  return tweetHTML;      
}

const renderTweets = function(tweets) {

   tweets.forEach(tweet => {
    let $tweet = createTweetElement(tweet);
    $('.tweet-container').prepend($tweet);
   });

};


const loadTweets = function () {
  $.ajax("/tweets", { method: "GET" })
  .then(function (tweetJSON) {
    console.log('Success: ', tweetJSON);
    renderTweets(tweetJSON);
  })
}

loadTweets();



$( "form" ).on( "submit", function( event ) {
  //Prevent the default form action to user stays on page
  event.preventDefault();
  const data = $( this ).serialize();
  const tweetData = data.slice(5);
  // Clean up tweet content to be able to accurately validate length
  const tweetText = tweetData.replaceAll('%20', ' ');
  
  // Reset (hide) any error messages before form validation
  $("#empty-error").fadeOut();
  $("#length-error").fadeOut();
  
  
  // If user submits a tweet with no content, display an appropriate error pop up.
  if (tweetData === '' || tweetData === null) {
    $("#empty-error").fadeIn();
    return
  }
  
  // If user submits a tweet that exceed the character limit, display an appropriate error pop up.
  if (tweetText.length > 140) {
    $("#length-error").fadeIn();
    return
  }
  
  // If validation passes, post form to 'db' and call the loadTweets handler to display the new tweet.
  $.ajax("/tweets", { method: "POST", data: data, });
  loadTweets();
  // Clear form after successful submit event.
  document.querySelector("form").reset();
  
});


// Close of document.ready function
});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



// Test / driver code (temporary). Eventually will get this from the server.


$(document).ready(function() {


const data = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}




const createTweetElement = function(tweetData) {
  const name = tweetData.user.name;
  const avatar = tweetData.user.avatars;
  const handle = tweetData.user.handle;
  const content = tweetData.content;
  const created_at = tweetData.created_at;

  const tweetHTML = `
        <article class="tweet">
          <header>
            <div>
              <img width="80px" src="${tweetData.user.avatars}">
              <h4>${tweetData.user.name}</h4>
            </div>
            <h4 class="handle">${tweetData.user.handle}</h4>
          </header>
            <div class="tweet-content">
              <p>${tweetData.content.text}</p>
            </div>
            <hr>
          <footer>
           <p>${tweetData.created_at}</p>
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

const $tweet = createTweetElement(data);

console.log($tweet);

$('.tweet-container').append($tweet);





const renderTweets = function() {

};






});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.
 
 $(document).ready(() => {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const createTweetElement = (data) => {
    const tweet = (`<article>
    <header class= "indiv-header">
      <div>
        <img src=${data.user['avatars']} alt="">
        <p>${data.user['name']}</p>
      </div>
      <a>${data.user['handle']}</a>
    </header>
    <main class= "tweet">
      <p>${data.content['text']}</p>
    </main>
    <footer>
      <p>${moment(data['created_at']).fromNow()}</p>
      <div>
        <img src="https://i.imgur.com/73hZDYK.png" alt="">
        <img src="https://i.imgur.com/73hZDYK.png" alt="">
        <img src="https://i.imgur.com/73hZDYK.png" alt="">
      </div>
    </footer>
  </article>`)
    return tweet;
  }

  const renderTweets = (tweetArray) => {
    tweetArray.forEach(element => {
      $('#tweet-container').append(createTweetElement(element))
    });
  }
  renderTweets(data);
  $('form').on('submit', (event) => {
    event.preventDefault();
    $
      .ajax({
        url: "/tweets/",
        method: "POST",
        data: $('form').serialize()
      })
      .then(res => console.log(res))

  })
 })

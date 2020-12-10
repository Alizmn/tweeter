/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.
 
 $(document).ready(() => {

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

  const loadTweets = () => {
    $
      .ajax({
        url: "/tweets",
        method: "GET"
      })
      .then(res => renderTweets(res))
  }
  loadTweets()
  // renderTweets(data);
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

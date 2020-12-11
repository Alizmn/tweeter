/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.
 
 $(document).ready(() => {

  const createTweetElement = (data) => {
    let p = document.createElement('p');
    let t = document.createTextNode(data.content['text'])
    p.appendChild(t);
    const tweet = (`<article>
    <header class= "indiv-header">
      <div>
        <img src=${data.user['avatars']} alt="">
        <p>${data.user['name']}</p>
      </div>
      <a>${data.user['handle']}</a>
    </header>
    <main class= "tweet">
      ${p.innerHTML}
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
      $('main.tweet').htm
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
  // submit new tweet
  $('form').on('submit', (event) => {
    event.preventDefault();
    const char = Number($('form .counter').val());
    if ( char >= 0 && char !== 140) {
      $
      .ajax({
        url: "/tweets/",
        method: "POST",
        data: $('form').serialize()
      })
      .then(() => {
        $('#tweet-text').val('')
        $('form .counter').html('140').css("color", "black")
        $('form button').css('background-color', '#C6C4C2')
        $('#tweet-container').empty()
        loadTweets()
      })

    } else {
      $('section.error').css('display', 'flex')
      // alert("Please Enter Valid Tweet")
    }
  }) 
 })

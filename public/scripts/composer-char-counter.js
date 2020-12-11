$(document).ready(() => {
  $('#tweet-text').on('input', event => {
    let charCount = 140 - $(event.target).val().length;
    $('section.error').css('display', 'none')
    $('form .counter').html(charCount)
    if (charCount < 0 ) {
      $('form .counter').css("color", "red")
      $('form button').css('background-color', '#C6C4C2')
    } else if (charCount <= 40) {
      $('form .counter').css("color", "orange")
      $('form button').css('background-color', '#4056A1')
    } else if ( charCount === 140) {
      $('form .counter').css("color", "black")
      $('form button').css('background-color', '#C6C4C2')
    } else {
      $('form .counter').css("color", "black")
      $('form button').css('background-color', '#4056A1')
    }
  })
})


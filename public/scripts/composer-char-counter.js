$(document).ready(() => {
  $('#tweet-text').on('input', event => {
    let charCount = 140 - $(event.target).val().length;
    $('form .counter').html(charCount)
    if (charCount < 0) {
      $('form .counter').css("color", "red")
    } else if (charCount <= 40) {
      $('form .counter').css("color", "orange")
    } else {
      $('form .counter').css("color", "black")
    }
  })
})


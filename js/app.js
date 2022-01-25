window.addEventListener('scroll', () => {
  var header = this.document.querySelector('#header__sidebar')
  header.classList.toggle('header__sticky', window.scrollY > 0)
})

// ********** FIXED NAVBAR ************
$(document).ready(function () {
  $('#menu-bar').click(function () {
    $('#menu-bar').toggleClass('fa-times')
    $('.menu').toggleClass('menu-toggle')
  })
  $(window).on('scroll load', function () {
    $('#menu-bar').removeClass('fa-times')
    $('.menu').removeClass('menu-toggle')
  })
})

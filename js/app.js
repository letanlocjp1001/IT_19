window.addEventListener('scroll', () => {
  var header = this.document.querySelector('#header__sidebar')
  header.classList.toggle('header__sticky', window.scrollY > 0)
})

// ********** FIXED NAVBAR ************

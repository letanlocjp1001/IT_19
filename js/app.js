window.addEventListener('scroll', () => {
  var header = this.document.querySelector('#header__sidebar')
  header.classList.toggle('header__sticky', window.scrollY > 0)
})

// ********** FIXED NAVBAR ************

function myFunction() {
  var x = document.getElementById('myLinks')
  if (x.style.display === 'block') {
    x.style.display = 'none'
  } else {
    x.style.display = 'block'
  }
}

var hamburger = document.querySelector('#page__menu')
var openMenu = document.querySelector('#open-menu')
var closeMenu = document.querySelector('#close-menu')
var navLinks = document.querySelector('#page__navlinks')
// var body = document.querySelector('body')
// var page = document.querySelector('.page')

hamburger.addEventListener('click', (event) => {
  if (event.target.id === 'open-menu') {
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
    // page.classList.toggle('limit-height')
    // body.classList.toggle('body__height')
    navLinks.classList.toggle('show')
  } else {
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
    // page.classList.toggle('limit-height')
    // body.classList.toggle('body__height')
    navLinks.classList.toggle('show')
  }
})

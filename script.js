// var menuBtn = document.querySelector('.page__menu')
// var openMenu = document.querySelector('#open-menu')
// var closeMenu = document.querySelector('#close-menu')
// var menu = document.querySelector('.page__navlinks')

// function menuAction(event) {
//   // console.log('clicked!')

//   if (event.target.id === 'open-menu') {
//     // console.log("open menu")
//     openMenu.style.display = 'none'
//     closeMenu.style.display = 'block'
//     menu.style.visibility = 'visible'
//   } else {
//     // console.log("close menu")
//     openMenu.style.display = 'block'
//     closeMenu.style.display = 'none'
//     menu.style.visibility = 'hidden'
//   }
// }

// menuBtn.addEventListener('click', menuAction)

var hamburger = document.querySelector('#page__menu')
var openMenu = document.querySelector('#open-menu')
var closeMenu = document.querySelector('#close-menu')
var navLinks = document.querySelector('#page__navlinks')
var body = document.querySelector('body')

hamburger.addEventListener('click', (event) => {
  if (event.target.id === 'open-menu') {
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
    body.classList.toggle('body__height')
    navLinks.classList.toggle('show')
  } else {
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
    body.classList.toggle('body__height')
    navLinks.classList.toggle('show')
  }
})

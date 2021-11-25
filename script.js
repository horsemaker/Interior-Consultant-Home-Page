var menuBtn = document.querySelector('.page__menu')
var openMenu = document.querySelector('#open-menu')
var closeMenu = document.querySelector('#close-menu')
var menu = document.querySelector('.page__navlinks')

function menuAction(event) {
  // console.log('clicked!')

  if (event.target.id === 'open-menu') {
    // console.log("open menu")
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
    menu.style.visibility = 'visible'
  } else {
    // console.log("close menu")
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
    menu.style.visibility = 'hidden'
  }
}

menuBtn.addEventListener('click', menuAction)
window.addEventListener('resize', () => {
  // console.log("resized!")
  // console.log(window.innerWidth)
  if (window.innerWidth > 480) {
    menu.style.visibility = 'visible'
  } else {
    if (menu.style.visibility === 'visible') {
      openMenu.style.display = 'none'
      closeMenu.style.display = 'block'
    } else {
      openMenu.style.display = 'block'
      closeMenu.style.display = 'none'
    }
  }
})

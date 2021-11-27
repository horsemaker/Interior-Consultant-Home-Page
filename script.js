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

// var previousWindowSize = undefined
// var currentWindowSize = window.innerWidth

// window.addEventListener('resize', () => {
  // console.log("resized!")
  // console.log(window.innerWidth)

  // if (window.innerWidth > 480) {
  //   menu.style.visibility = 'visible'
  // } else {
  //   // if (menu.style.visibility === 'visible') {
  //   //   return
  //   // }
  //   menu.style.visibility = 'hidden'
  //   openMenu.style.display = 'block'
  //   closeMenu.style.display = 'none'
  // }
  // // console.log("Previous Window Size", previousWindowSize)
  // console.log("Current Window Size", currentWindowSize)

  // if (previousWindowSize === undefined) {
  //   if (currentWindowSize > 480) {
  //     menu.style.visibility = 'visible'
  //   } else {
  //     menu.style.visibility = 'hidden'
  //     openMenu.style.display = 'block'
  //     close.style.display = 'none'
  //   }
  // } else if (previousWindowSize > 480) {
  //   if (currentWindowSize < 480) {
  //     menu.style.visibility = 'hidden'
  //     openMenu.style.display = 'block'
  //     close.style.display = 'none'
  //   } else {
  //     menu.style.visibility = 'visible'
  //   }
  // } else {
  //   // previousWindowSize < 480
  //   if (currentWindowSize < 480) {
  //     if (menu.style.visibility === 'visible') {
  //     }
  //   } else {
  //     // currentWindowSize > 480
  //     menu.style.visibility = 'visible'
  //   }
  // }

  // previousWindowSize = currentWindowSize
// })

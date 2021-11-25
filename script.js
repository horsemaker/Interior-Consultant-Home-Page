const navSlide = () => {
  const burger = document.querySelector('.page__burger')
  const nav = document.querySelector('.page__navlinks')
  const navLinks = document.querySelectorAll('.page__navlinks li')

  console.log(navLinks)

  burger.addEventListener('click', () => {
    console.log('clicked')
    // Toggle Nav
    nav.classList.toggle('navbar-active')

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 1
        }s`
      }
    })

    // Burger Animation
    burger.classList.toggle('toggle-menu')
  })
}

navSlide()

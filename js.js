var navMenu = document.querySelector('#header nav')
var toggleMenu = document.querySelectorAll('.toggle')
var allLinks = document.querySelectorAll('.btn-nav')

for (const link of toggleMenu) {
  link.addEventListener('click', function () {
    navMenu.classList.toggle('show')
  })
}
for (const links of allLinks) {
  links.addEventListener('click', function () {
    navMenu.classList.remove('show')
  })
}

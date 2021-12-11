const $btn = document.querySelector('.menu-icon');
const $links = document.querySelector('.nav-links');
const $link = document.querySelectorAll('.links > li > a');

const close = `<i class="fas fa-times"></i>`
const open = `<i class="fas fa-bars"></i>`

$btn.addEventListener('click', e => {
    $links.classList.toggle('show-links')
    if($links.classList.contains('show-links')) {
        $btn.textContent = null
        $btn.innerHTML = close
    }else {
        $btn.textContent = null
        $btn.innerHTML = open
    }
})

$link.forEach(link => {
    link.addEventListener('click', e => {
        $links.classList.remove('show-links');
        $btn.textContent = null
        $btn.innerHTML = open
    })
})

const navbar = document.querySelector(".header-container");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
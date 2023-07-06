// Navbar Transparent to White when scrolling
$(window).scroll(function() {
  var offset = $(window).scrollTop();
  console.log(offset);
  $('.navbar').toggleClass('white', offset > 50);
});

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

//carousel 

$('#myCarousel').carousel({
    interval: 3000,
 })


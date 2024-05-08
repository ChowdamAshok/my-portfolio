window.onload = yourCode;
function yourCode() {
   // Navbar
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick  = (open) => {
      navbar.classList.toggle('active');
  }

  window.onscroll = () => {
      navbar.classList.remove('active');
  }
 
  // Scroll Reveal
  const sr = ScrollReveal ({
      origin: 'left',
      distance: '400px',
      duration: 2000,
      reset: true
  });


  sr.reveal(`.home-text, .home-img,
              .about-img, .about-text,
              .box, .s-box,
              .btn, .connect-text,
              .contact-box`, {
      interval: 200
  })
}

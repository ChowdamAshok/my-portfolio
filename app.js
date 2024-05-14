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
  // Dark Mode
  let darkmode = document.querySelector('#darkmode');

  darkmode.onclick = () => {
      if(darkmode.classList.contains('bx-moon')){
          darkmode.classList.replace('bx-moon','bx-sun');
          document.body.classList.add('active');
      }else{
          darkmode.classList.replace('bx-sun','bx-moon');
          document.body.classList.remove('active');
      }
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


gsap.from('.logo',{opacity: 0, duration: 1, delay:1, y:30, stagger:0.2})
gsap.from('.navbar a',{opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})
gsap.from('.home .left',{opacity: 0, duration: 1, delay:1, y:30, stagger:0.2})
gsap.from('.home .right',{opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})
gsap.from('.abt h2',{opacity: 0, duration: 1, delay:1, y:30, stagger:0.2})
gsap.from('.about p',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
gsap.from('.skill-heading h2',{opacity: 0, duration: 1, delay:1, y:30, stagger:0.2})
gsap.from('.skills img',{opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})
gsap.from('#Resume h1',{opacity: 0, duration: 1, delay:1, y:30, stagger:0.2})
gsap.from('.block-title h3',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
gsap.from('.timeline',{opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})
gsap.from('.pjs-title h1',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
gsap.from('.card',{opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})
gsap.from('.cnt-main h1',{opacity: 0, duration: 1, delay:1, y:30, stagger:0.2})
gsap.from('.cnt-main h2',{opacity: 0, duration: 1, delay:1.5, y:30, stagger:0.2})
gsap.from('.logobtn img',{opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})

var typed = new Typed('#element', {
    strings: ['Web Developer', 'AI Engineer',],
    typeSpeed: 50,
  });
  document.addEventListener("DOMContentLoaded", function() {
    const offset = 80; // Adjust this value as needed to match your fixed nav height

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});
function replayAnimation() {
  const element = document.getElementById('animatedElement');
  element.classList.remove('animate__bounceIn');
  
  // Trigger a reflow, flushing the CSS changes
  void element.offsetWidth;

  element.classList.add('animate__bounceIn');
}
setInterval(replayAnimation, 2000);
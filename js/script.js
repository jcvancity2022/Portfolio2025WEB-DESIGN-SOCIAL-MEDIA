// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Select the theme switcher button
    var themeSwitcher = document.getElementById('theme-switcher');

    // Listen for a click event on the theme switcher
    themeSwitcher.addEventListener('click', function() {
        // Toggle the 'dark-mode' class on the body
        document.body.classList.toggle('dark-mode');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });
  
    document.querySelectorAll('.scroll-animation').forEach((elem) => {
      observer.observe(elem);
    });
  });

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop){
    // Scrolling Down
    document.getElementById("background_image").style.opacity = Math.max(0, 1 - currentScroll / 200);
    document.getElementById("Profile").style.opacity = Math.min(1, currentScroll / 200);
  } else {
    // Scrolling Up
    document.getElementById("background_image").style.opacity = Math.min(1, (200 - currentScroll) / 200);
    document.getElementById("Profile").style.opacity = Math.max(0, (200 - currentScroll) / 200);
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

document.getElementById('interactive-container').addEventListener('mousemove', function(e) {
  // Get the width of the container and the cursor position within it
  var containerWidth = this.offsetWidth;
  var cursorPosition = e.offsetX;

  // Calculate the percentage of the cursor position relative to the container width
  var cursorPercentage = (cursorPosition / containerWidth) * 100;

  // Set widths based on cursor position
  if (cursorPercentage > 50) {
    // If cursor is on the right side, expand the left side
    document.getElementById('designer').style.width = '75%';
    document.getElementById('coder').style.width = '25%';
  } else {
    // If cursor is on the left side, expand the right side
    document.getElementById('designer').style.width = '25%';
    document.getElementById('coder').style.width = '75%';
  }
});

document.getElementById('interactive-container').addEventListener('mouseleave', function() {
  // Reset the widths when the mouse leaves the container
  document.getElementById('designer').style.width = '50%';
  document.getElementById('coder').style.width = '50%';
});
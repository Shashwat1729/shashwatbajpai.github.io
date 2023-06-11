// Smooth scroll to section
function smoothScroll(target) {
    const element = document.querySelector(target);
    const offset = 80; // Adjust this value to set the offset for the scrolling position

    window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
    });
}
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

 // Scroll to the top when the page loads
 window.onload = function() {
    scrollToTop();
};

// Scroll to the top of the page on reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Toggle menu button
function toggleLeftMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const leftMenu = document.querySelector('.left-menu');

    menuBtn.classList.toggle('open');
    leftMenu.classList.toggle('open');
}
// Add event listeners to left menu links
document.addEventListener("DOMContentLoaded", function() {
    const leftMenuLinks = document.querySelectorAll(".left-menu ul li a");

    leftMenuLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href");

            // Smoothly scroll to the target section
            smoothScroll(sectionId);
            
            // Close the menu
            toggleLeftMenu();
        });
    });
});

// Add event listener to dark mode toggle button
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

window.onload = function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        element.style.opacity = '1';
    });
};
document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section");
    
    function checkInView() {
        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add("in-view");
            } else {
                section.classList.remove("in-view");
            }
        });
    }
    
    window.addEventListener("scroll", checkInView);
    window.addEventListener("resize", checkInView);
    
    checkInView();
});

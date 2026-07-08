// ===============================
// GHSS Lessu Website
// ===============================

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade in sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.style.opacity=0;
    section.style.transform="translateY(50px)";
    section.style.transition="1s";
    observer.observe(section);
});

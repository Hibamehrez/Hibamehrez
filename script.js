
document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('nav a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    }

    console.log('Portfolio ready and interactive!');
});

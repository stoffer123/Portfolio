const links = document.querySelectorAll('.nav-bar-paths-item'); // Correct class selector
const pages = document.querySelectorAll('.page'); // Correct class selector

// Add event listeners to each link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the target page id from the data-target attribute
        const targetPage = this.getAttribute('data-target');

        // Remove 'active' class from all pages
        pages.forEach(page => page.classList.remove('active'));

        // Add 'active' class to the target page
        document.getElementById(targetPage).classList.add('active');
    });
});

var currentLocation = document.location.href;
var navigationLinks = document.querySelectorAll('.navigation-a');

navigationLinks.forEach(function(link) {
    if (link.href === currentLocation) {
        link.classList.add('active');
    }
});
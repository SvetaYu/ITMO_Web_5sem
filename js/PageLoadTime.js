(function() {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        const footer = document.querySelector('footer');
        // footer.innerHTML = 'Page load time:'+ ${loadTime}+'ms';
        var statInfo = document.createElement('p');
        statInfo.textContent = 'Page load time: ' + loadTime + 'ms';
        footer.appendChild(statInfo);
    });
})();


// (function() {
//     window.addEventListener('load', function() {
//         var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
//         var footer = document.querySelector('footer');
//         var statInfo = document.createElement('p');
//         statInfo.textContent = 'Page load time: ' + loadTime + 'ms';
//         footer.appendChild(statInfo);
//     );
//     )();
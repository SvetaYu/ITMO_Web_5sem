document.querySelectorAll('.product-card-button').forEach(function(button) {
    button.addEventListener('click', function() {
        var productName = button.parentElement.parentElement.querySelector('.product-card-title').innerText;
        document.getElementById('notification').innerText = 'Добавлено: ' + productName;
        document.getElementById('notification').style.display = 'block';
        setTimeout(function() {
            document.getElementById('notification').style.display = 'none';
        }, 3000);
    });
});
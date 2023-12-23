document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('commentButton');
    const preloader = document.getElementById('preloader');
    const contentContainer = document.getElementById('content');

    fetchButton.addEventListener('click', fetchData);

    function restoreData() {
        let stored = localStorage.getItem("data");
        if (stored) {
            contentContainer.innerHTML = stored;
        }
    }

    restoreData();

    function fetchData() {
        const commentId = Math.ceil(Math.random() * 100) + 1;
        const apiUrl = `https://jsonplaceholder.typicode.com/comments?id=${commentId}`;

        preloader.style.display = 'block';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                preloader.style.display = 'none';
                renderData(data);
            })
            .catch(error => {
                preloader.style.display = 'none';
                renderError();
                console.error('Fetch error:', error);
            });
    }

    function renderData(data) {
        const randomComments = data.sort(() => 0.5 - Math.random()).slice(0, 5);
        randomComments.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'content';
            div.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p>${comment.body}</p>
                `;
            contentContainer.appendChild(div);

        })
        localStorage.setItem("data", contentContainer.innerHTML);
    }



    function renderError() {
        contentContainer.innerHTML = '<div class="error-message"> Упс... Что-то пошло не так</div>';
    }
});
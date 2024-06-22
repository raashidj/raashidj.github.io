document.addEventListener('DOMContentLoaded', function () {
    fetch('https://newsapi.org/v2/everything?q=AI%20OR%20IoT&apiKey=ecfbf5602c754f6095a2f70a68e88fc8')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-content');
            newsContainer.innerHTML = ''; // Clear "Loading..." text
            data.articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
});

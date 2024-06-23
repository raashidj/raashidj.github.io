document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const apiUrl = `https://newsapi.org/v2/everything?q=IoT&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-content');
            newsContainer.innerHTML = ''; // Clear "Loading..." text

            if (data.articles && data.articles.length > 0) {
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
            } else {
                newsContainer.innerHTML = 'No articles found.';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            const newsContainer = document.getElementById('news-content');
            newsContainer.innerHTML = 'Error fetching news.';
        });
});

function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Função para buscar a URL da imagem da página principal do GitHub
function fetchGitHubRepoImage(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.owner.avatar_url;
            const newImage = url('../image/image.jpg');
            document.getElementById('repo-image').style.backgroundImage = `url(${newImage})`;
        })
        .catch(error => console.error('Erro ao buscar a imagem do repositório:', error));
}

// Evento de clique na pasta do projeto
document.getElementById('project-folder').addEventListener('click', function () {
    // Substitua 'owner' e 'repo' com os valores apropriados do seu repositório
    fetchGitHubRepoImage('guDutra', 'https://github.com/guDutra/HTML-CSS.git');
});




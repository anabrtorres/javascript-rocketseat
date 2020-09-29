// EXERCISE #1
var checaIdade = function(idade) {
    return new Promise(function(resolve, reject) {
        if (idade >= 18) {
            resolve(checaIdade);
        }else if (idade < 18) {
            reject(checaIdade);
        }
    });
}

checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });


// EXERCISE #2
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

function renderRepos(repos) {
    for(rep of repos) {    
        const repoElement = document.createElement('li');
        const repoText = document.createTextNode(rep.name);

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
}

function listRepos() {
    var user = inputElement.value;
    if(!user) return;

    axios
        .get('https://api.github.com/users/' + user + '/repos')
        .then(function(response) {
           renderRepos(response.data);
        }); 
}


// EXERCISE #3
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

function renderRepos(repos) {
    listElement.innerHTML = "";
    for(rep of repos) {    
        const repoElement = document.createElement('li');
        const repoText = document.createTextNode(rep.name);

        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
}

function renderLoad() {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadElement = document.createElement('li');

    loadElement.appendChild(textElement);
    listElement.appendChild(loadElement);
}

  function renderErro() {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('error 404');
    var loadElement = document.createElement('p');

    loadElement.appendChild(textElement);
    listElement.appendChild(loadElement);
}

function listRepos() {
    var user = inputElement.value;
    if(!user) return;
    renderLoad();

    axios
        .get('https://api.github.com/users/' + user + '/repos')
        .then(function(response) {
           renderRepos(response.data);
        })
        .catch(function() {
            renderErro();
        });
}
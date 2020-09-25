# Javascript-Rocketseat
This project is the final exercises of each Rocketseat Javascript course module JavaScript Starter 🎓

<h2>Exercícios Módulo 01 - Introdução JavaScript </h2>
<h3>Exercício #1</h3>
<p>Crie uma função que dado o objeto a seguir:</p>
<pre><code>var endereco = {
	rua: "Rua dos pinheiros",
	numero: 1293,
	bairro: "Centro",
	cidade: "São Paulo",
	uf: "SP"
};
</code></pre>
<p>Retorne o seguinte conteúdo:</p>
<p><code>O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.</code></p>

<h3>Exercício #2</h3>
<p>Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:</p>
<pre><code>function pares(x, y) {
  // código aqui
}
pares(32, 321);
</code></pre>

<h3>Exercício #3</h3>
<p>Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.</p>
<pre><code>function temHabilidade(skills) {
  // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
</code></pre>
<p><em>Dica: para verificar se um vetor contém um valor, utilize o método indexOf.</em></p>

<h3>Exercício #4</h3>
<p>Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:</p>
<pre><code>function experiencia(anos) {
  // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
</code></pre>

<h3>Exercício #5</h3>
<p>Dado o seguinte vetor de objetos:</p>
<pre><code>var usuarios = [
{
nome: "Diego",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
nome: "Gabriel",
habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}
];
</code></pre>
<p>Escreva uma função que produza o seguinte resultado:</p>
<p><code>O Diego possui as habilidades: Javascript, ReactJS, Redux O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir</code></p>
<p><em>Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.</em></p>

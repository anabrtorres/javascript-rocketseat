// EXERCISE #1:
var adress = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log("o usuário mora em", adress.cidade, "/", adress.uf, "no bairro",adress.bairro,", na ", adress.rua, "com nº", adress.num,".");


// EXERCISE #2:
function pares(x, y) {
    for(i=x; i<=y; i++) {
        if(i%2 === 0){
            console.log(i);
        }
    }
}
pares(32, 321);


// EXERCISE #3:
function habilidade(skills, elemento) {
    if(skills.indexOf(elemento) != -1) {
        return true;
    }else{
        return false;
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
var elemento = "React";

result = habilidade(skills, elemento);
console.log(result);


// EXERCISE #4:
function experiencia(anos) {
         if(anos >= 0 && anos < 1) return "Iniciante";
    else if(anos >= 1 && anos < 3) return "Intermediario";
    else if(anos >= 3 && anos < 6) return "Avancado";
    else if(anos >= 6)             return "Jedi Master";                
}
var anosEstudo = 7;
result = experiencia(anosEstudo);
console.log(result);


// EXERCISE #5:
var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

for (var value of usuarios) {
    console.log('O', value.nome, 'possui as habilidades: ', value.habilidades.join(', '));
}
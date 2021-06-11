/*var nome = "Edgar Macedo";
var idade = 29;
var idade2 = 10;

var frase = "O Sport é o melhor time do mundo."
alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);

console.log(nome);
console.log(idade2);
console.log(idade * idade2);
console.log(frase.replace("O Sport", "A Ferrari"));
console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("Sport", "Ferrari"));

var lista = ["SpaceX", "Blue Origin", "Rocket Lab"];*/
//lista.push("Relativity");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" | "))
//console.log(lista[1]);

/*var empresa = {nome: "SpaceX", foguete: "StarShip"}
console.log(empresa);
alert(empresa.foguete);*/

/*
var empresas = [{nome: "SpaceX", foguete: "StarShip"}, {nome: "Blue Origin", foguete: "New Glenn"}];
console.log(empresas);
alert(empresas[1].foguete);

var idade = prompt("Qual tua idade?");
if(idade >= 18)
    {
        alert("maior de idade");
    }
else{
        alert("menor de idade");
    };*/

/*
var count = 5;
while (count < 5)
{
    console.log(count);
    count = count + 1; //count++
};*/

/*
for (var i = 0; i <= 5; i++) {
    alert(i);
};*/

/*var d = new Date();
alert(d.getMonth() + 1);
alert(d.getDay());*/

/*function soma(n1, n2)
{
    return n1+n2;
}

function setReplace(frase, nome, novo_nome)
{
    frase.replace(nome, novo_nome);
}

function validaIdade(idade)
{
    var validar;
    if(idade >= 18){
        validar = true;
    }
    else
    {
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));

alert(soma(5,10));
alert(setReplace("Vai SpaceX", "SpaceX", "Blue Origin"));*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Sim, toni é frango!");
}

function redirecionar() {
    window.open("https://www.spacex.com/"); //abre em outra aba
    window.location.href = "https://www.spacex.com/"; //abre na msm aba
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por isso."
    elemento.innerHTML = "Obrigado por isso.";
    //alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui, vai."
    elemento.innerHTML = "Passe o mouse aqui, vai.";
}

function load() {
    alert("pagina ok");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
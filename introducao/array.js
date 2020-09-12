let carros = ["Pálio 98", "Toro", "Uno", 10, true, new Date(), function(){}];

console.log(carros[5].getFullYear());

carros.forEach(function(value, index){ 
    console.log(index, value);
});

let linguagens = [
    "PHP",
    "JavaScript",
    "Ruby",
    "HTML",
    "CSS"
];

linguagens.forEach(function(value){
    console.log(`Aprenda ${value}`);
});
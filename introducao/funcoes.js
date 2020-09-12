function calc(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(5,5,'+');
console.log(resultado);

//Função anônima

(function(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
})

(5,5,'+');

//Arrow functions

let calculator = (x1, x2, operator)=>{
    return eval(`${x1} ${operator} ${x2}`)
}
let resultArrow = calc(2,3,'+');
console.log(resultArrow);
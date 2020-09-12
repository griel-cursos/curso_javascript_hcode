//Antiga forma de criar classe
let celular = function(){

    this.cor = "Preto";

    this.ligar = function()
    {
        return "Ligando";
    }

}

let objeto = new celular();

console.log(objeto.ligar());

//Forma nova de criar classe

class celular2 
{

    constructor(){
        this.cor = "Preto";
    }

    ligar()
    {
        return "Ligando";
    }



}

let objeto2 = new celular2()
console.log(objeto2.ligar());
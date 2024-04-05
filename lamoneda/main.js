function tirarlamoneda(){
    let number = Math.random();
    return number < 0.5 ? "plata": "plomo";
}

console.log ("Resultado del lanzamiento:",tirarlamoneda())
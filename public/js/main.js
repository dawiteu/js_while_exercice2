/*
// ex 1 
let valeur = prompt("Entrez une val "); 

while(valeur == undefined || valeur.length <= 0){
    valeur = prompt("Entrez votre val"); 
}

console.log(valeur);




let nombre = parseInt(prompt("Entrez un nombre plus grand que 10")); 


if(!isNaN(nombre)){
    while(nombre < 10){
        nombre = parseInt(prompt("Entre un nombre PLUS grand que 10"));
    }
}else{
    alert('un nombre!'); 
}

*/

/* 

//exo 2 (1): 



let nbr = 0; 

while(nbr <= 11){
    if(nbr%2==1){
       console.log(nbr); 
    }
    nbr++; 
}

*/

/*
// exo 2 (2)

let prenom = prompt("Entre ton prenom: "); 

console.log(`Nombre de char dans ${prenom} = ${prenom.length}`); 

let max = prenom.length; 

while(max > 0){
    console.log(`${prenom} `); 
    max--;
}

// soit ca 

let min = 0; 

while(min < prenom.length){ 
    console.log(`${prenom}`);
    min++; 
}



while(min < prenom.length){
    console.log(prenom.charAt(min));
    min++;
}


*/

//exo 3 


/*
let prenom = prompt("Entre ton prenom");

let min = 0; 

while(min < prenom.length){
    if(min % 2 == 0){
        console.log(` ${ prenom.charAt(min) }`);
    }else{
        console.log(` ${ prenom.charAt(min).toUpperCase() }`);
    }
    min++;
}

*/

// exo 3 (2) 


let nb1 = prompt("Entre le nombre 1"); 
let nb2 = prompt("Entrez le nombre 2 "); 

while(isNaN(nb1)){
    nb1 = parseFloat(prompt("Entre le nombre 1")); 
}
while(isNaN(nb2)){
    nb2 = parseFloat(prompt("Entre le nombre 2")); 
}

console.log(`${nb1} x ${nb2} = ${Math.round(nb1*nb2)} `);


/* /*

let prenom = prompt("Entre ton prenom?"); 

while(prenom.length < 5){
    prenom = prompt("Entre ton prenom!?");
}

if(prenom.length >= 5){
    console.log(prenom.toUpperCase()); 
}

*/
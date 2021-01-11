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
/*
while(min < prenom.length){ 
    console.log(`${prenom}`);
    min++; 
}

*/

while(min < prenom.length){
    console.log(prenom.charAt(min));
    min++;
}

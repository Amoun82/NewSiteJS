/* 
Pour manipuler le DOM (document object modele)
Nous avons besoin pour commencer de selectionner differents éléments.

Nous pouvons les selectionner 
- par leur id
- par leur balise
- par leur classe
- par des selecteurs css

*/


// ****************************
// selection par ID
// ****************************


    // SELECTION NATURELLE

    // la selection naturelle consiste à selectionner un element du DOM en faisant reference à son ID
    console.log('coucou');
    
    // fait reference à l'element qui possede l'attribut ID et dont la valeur est conteneur dans le DOM c'est a dire la representation de notre html dans le navigateur
    console.log(conteneur);

    // on manipule l'element selectionné en lui appliquant du css via son attribut style
    conteneur.style.border = '2px solid grey';
    conteneur.style.width = '80%';
    conteneur.style.margin = '0 auto';
    // cette syntaxe n'autorise pas le tiret, la technique c'est retirer le tiret et mettre en majuscule le mot suivant
    conteneur.style.marginTop = '20px';


    // selectionner l'id entete en selection naturelle et lui appliquer un style="background-color : dodgerblue;"
    // hauteur de 80px
    console.log(entete);
    entete.style.backgroundColor = 'dodgerblue';
    entete.style.height = '80px';
    entete.style.color = '#fff';


    
    // SELECTION getElementById()
    // fonction qui selection un ID dans le dom, elle s'applique sur le document

    console.log(document.getElementById('entete'));

    document.getElementById('entete').style.textAlign = 'center';
    // autre type de manipulation : modification de contenu HTML
    document.getElementById('entete').innerHTML = '<h1 id="monTitre" style="margin: 0;">Selection JS</h1>';

    // je peux selectionner dans le dom, le titre H1 créé juste avant
   console.log( document.getElementById('monTitre'));

   // nouvelle manipulation : modification du contenu texte de la balise H1
   document.getElementById('monTitre').innerText = "Selection en javascript";

   

// ****************************
// selection par Balise
// ****************************

console.log(document.getElementsByTagName('section'));
document.getElementsByTagName('section')[0].style.background = "orange";

// Selectionner avec getElementsByTagName le dernier span (celui du footer) et de lui appliquer un text-decoration : underline;

// j'affecte a une variable ma selection
var mesSpan = document.getElementsByTagName('span');


// je teste ma collection html recuperée
console.log(mesSpan);

// je teste le 4Eme span -> l'indice 3 entre crochets
console.log(mesSpan[3]);

// j'applique le soulignement dessus
mesSpan[mesSpan.length-1].style.textDecoration = 'underline';

// html collection va exister même si je n'ai qu'une seule balise au nom demandé
// je teste la selection du footer dans la console, elle me renvoie une collection d'un unique element (indice 0)
console.log(document.getElementsByTagName('footer'));
// je change se couleur de fond
document.getElementsByTagName('footer')[0].style.backgroundColor = "dodgerblue";
// je change sa hauteur
document.getElementsByTagName('footer')[0].style.height = "40px";

// ****************************
// comment appliquer une modification à l'ensemble des elements d'une collection

var mesSection = document.getElementsByTagName('section');

// je vise la premiere section
/* 
mesSection[0].style.minHeight = "200px";
mesSection[1].style.minHeight = "200px";
mesSection[2].style.minHeight = "200px"; 
*/

// pour agir sur l'ensemble des elements d'une collection, nous effectuons une boucle 

// initialiation du compteur de tour de boucle
// proposition pour repeter la boucle
// incrementation de 1 de la variable i

for(let i=0; i < mesSection.length; i++ ){
    mesSection[i].style.minHeight = "200px";
    mesSection[i].style.border = '1px solid red' ;
    if(i != 0){
        mesSection[i].style.background = 'lightgreen' ;
    }
}



// ****************************
// selection par Classe
// ****************************

console.log(document.getElementsByClassName('section'));

var classeSection = document.getElementsByClassName('section');

// je veux changer la couleur du texte du dernier element de la collection

// je le vise individuellement pour changer sa couleur grace à l'indice [3] qui lui correspond
classeSection[3].style.color = "#fff";

// pour toucher chaque element de la collection recueillie je vasi boucler dessus

for(var j = 0; j < classeSection.length; j++){
    classeSection[j].style.fontFamily = "arial";
}


// selectionner par getElementsByTagName la balise UL et lui affecter le display : flex;
// retirer à cet element les margin, les padding et le list-style (none)

var monUl = document.getElementsByTagName('ul');
console.log(monUl);

monUl[0].style.display = "flex";
monUl[0].style.margin = "0";
monUl[0].style.padding = "0";
monUl[0].style.listStyle = "none";
monUl[0].style.minHeight = "40px";

// selectionner tous les elements possedant la classe menu via getElementsByClassName
// effectuer une boucle pour tous les viser et meur appliquer une couleur de fond skyblue et une largeur 25%

let mesLi = document.getElementsByClassName('menu');
console.log(mesLi);

for(var k = 0; k < mesLi.length; k++){
    mesLi[k].style.backgroundColor = "skyblue";
    mesLi[k].style.width = "25%";
    mesLi[k].style.textAlign = "center";
    mesLi[k].style.lineHeight = "40px";
}




// ****************************
// selection par querySelector
// ****************************
// on utilise en argument de ces deux fonctions des selecteurs CSS

// ****************
// querySelector()
// selectionne un element unique
// dans le cas ou j'ai plusieurs element satifaisant au selecteur, il me selectionnera le premier

var monQuery = document.querySelector('footer span.section');
console.log(monQuery);
monQuery.innerText = "footer";



// ****************
// querySelectorAll()
// selectionne une collection (nodelist)

var cesSpan = document.querySelectorAll('section span, .menu');
console.log(cesSpan);

// sur une liste comme une collection, pour toucher chaque element successivement, je pratique une boucle

for(var l = 0; l < cesSpan.length; l++){
    cesSpan[l].style.fontWeight = 'bold';
}


// utiliser querySelectorAll pour viser tous les elements pairs (   :nth-child(even)   ) du menu pour leur appliquer un background-color: blue; dans une boucle


var menuPair = document.querySelectorAll('li.menu:nth-child(even)');
console.log(menuPair);

for(var m = 0; m < menuPair.length; m++){
    menuPair[m].style.background = "blue";
}


// exemple d'evenenement sur un bouton

document.getElementById('bouton').onclick = function(){
    document.querySelector('footer span').style.display = "none";
};

// console.dir() fait apparaitre toutes les propriétés d'un element selectionné dans la console
console.dir(document.getElementById('bouton'));

// on peut redefinir les propriétés dans la liste
document.getElementById('bouton').innerText = 'coucou';
// nous pouvons recuperer une information contenu en valeur de propriété
console.log(document.getElementById('bouton').id);


/* mes tests */

for (let i = 0 ; i < document.getElementsByTagName('section').length; i ++)
{
    document.getElementsByTagName('section')[i].style.backgroundColor = 'orange' ;
}
    
    
    
    /* 
    // selectionner par getElementsByTagName la balise UL et lui affecter le display : flex;
    // retirer à cet element les margin, les padding et le list-style (none)
    
    var ul = document.getElementsByTagName('ul') ;
    
    
    ul[0].style.margin = '0' ;
    ul[0].style.padding = '0' ;
    ul[0].style.listStyle = 'none' ;
    ul[0].style.display = 'flex' ;
    ul[0].style.textAlign = 'center' ;
    ul[0].style.color = 'red' ;
    
    
    
    // selectionner tous les elements possedant la classe menu via getElementsByClassName
    // effectuer une boucle pour tous les viser et meur appliquer une couleur de fond skyblue et une largeur 25%
    
    var menu = document.getElementsByClassName('menu') ;
    
    for ( let k = 0 ; k < menu.length ; k++ ){
        menu[k].style.backgroundColor = 'skyblue' ;
        menu[k].style.width = '25%' ;
    
    }
     */
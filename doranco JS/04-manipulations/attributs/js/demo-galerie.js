// creer un window.onload
"use strict";
window.onload = function(){
    // selectionner les liens
	console.log(document.querySelectorAll('aside a')) ;
	var mesLiens = document.querySelectorAll('aside a') ;

	console.log(mesLiens) ;

    // faire une boucle sur tous les liens
	for(let i = 0 ; i < mesLiens.length ; i++)
	{
		console.log('test') ;
	
        // evenement click sur chaque lien, lancement de la fonction anonyme
		mesLiens[i].onclick = function (event)
		{
			
			// annuler le comportement par defaut du lien pour rester sur ma page
			event.preventDefault();
			
			console.log("j'ai cliqué") ;
		
			// recuperer dans une variable les attributs
			// le title du lien
			let attributTitre = mesLiens[i].title ;

			let attributTitreGet = this.getAttribute('title') ;

			// ici le titre est le meme
			console.log('titre avec mes liens[i] : '+attributTitre) ;
			console.log(attributTitreGet) ;
			
			// le href du lien
			let attributeHref = mesLiens[i].href ;

			let attributeHrefGet = this.getAttribute('href') ;

			// ici le href change en fonction de la récupération du liens
			console.log('href avec mes liens[i] : ${this}'+attributeHref) ;
			console.log(attributeHrefGet) ;


			// attribuer à la grande image
			console.log(document.querySelector('#big img')) ;
			
			// selectionner la grande image
			let grandImage = document.querySelector('#big img') ;
			
			// attribuer la variable du href au src de la grande image
			grandImage.setAttribute('src', attributeHrefGet);
			
			
			// attribuer la variable du title au alt de la grande image
			grandImage.setAttribute('alt', attributTitre);
			
			console.log(grandImage) ;

			// j'attibue au figcaption le contenu présent dans la variable texte
			console.log(mesLiens[1].parentNode.parentNode.children[0].children[1]);

			console.log('ici pour l\'enfant :') ;
			console.dir(big.children[1]) ;

			let figcaption = document.querySelector('#big figcaption') ;
			let changementTitre = big.children[1] ;
			
			// deux meme méthode pour changer le meme titre
			figcaption.innerText = `${attributTitre}` ;
			changementTitre.innerText = `${attributTitreGet}` ;

			// appliquer un contour noir à tous les liens dans une boucle
			for(let j=0 ; j < mesLiens.length ; j++ )
			{
				mesLiens[j].style.border = '2px solid black';
			}

			// j'affecte le contour rouge au lien cliqué
			console.dir(this) ;
			console.dir(mesLiens[i]) ;
			this.style.border = '2px solid red';
			mesLiens[i].style.border = '2px solid red';

			console.log(mesLiens[i].parentNode) ;

		// fin de la fonction anonyme
		}
	// fin de la boucle
	}

};
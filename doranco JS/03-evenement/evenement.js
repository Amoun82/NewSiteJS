
// premier evenement pour detecter le chargemenbt total de la page

window.onload = function(){

    // je teste le bon chargement du fichier
    console.log('test');
    // je teste la possibilité de selectionner des elements du dom
    console.log(div1);
    
    
    // La mise en place d'evenement peut se faire de deux facons:
    // - propriété d'evenement .onclick =
    // - la fonction d'ecoute d'evenement : addEventListener()
    
    // quelle que soit la methode employée, l'evenement appellera une fonction.
    // cette fonction est SOIT déclarée a part, SOIT déclarée lors de la mise en place de l'evenement
    
    
    // création d'une fonction à part
    function monAlerte(){
        alert('Fonction Executée');
    }
    // monAlerte();
    document.querySelector('h2').onclick = monAlerte;
    
    // création d'une fonction anonyme liée à l'evenement
    
        // exemple de propriété d'evenement
        btn1.onclick = function(){
            alert('Bouton 1 cliqué !');
        };
    
        // exemple avec la fonction addEventListener
            // - prenier argument : l'evenement
            // - second argument la fonction
        btn2.addEventListener('click', function(){
            alert('Bouton 2 cliqué !');
        });
    
        // creer une fonction (a part) disparition: elle a pour but de faire disparaitre l'id div1 (display none)
    
        function disparition(){
            // this est un mot clef faisant reference à l'element lui même, c'est a dire l'element sur qui je place l'evenement
            this.style.display = "none";
        }
        // disparition();
    
    
        // vous selectionnez div1 pour lui placer un evenement click par addEventListener. Ce click executera la fonction disparition et devra donc faire disparaitre la div1
            document.querySelector('#div1').addEventListener('click', disparition);
    
    
            // autre methode alternative
            /*
                div1.onclick = function(){
                    div1.style.display = 'none';
                };
            */
            
            // je refais appel a cette fonction disparition en cliquant sur btn3
            btn3.addEventListener('click', disparition);
    
            
    
        // DBLCLICK
    
            // placer un evenement dbclick sur la #div2 pour lui changer de couleur de fond
    
            // je créé un marqueur initialisé en false par defaut
            var marqueur = false;
            div2.ondblclick = function(){
    
                // je créé une condition à l'aide d'un marqueur pour determiner a chaque double clic ou en est la couleur pour la modifier
                if(!marqueur){
                    this.style.background = "orange";
                    // je fais evoluer le marqueur
                    marqueur = true;
                }
                else{
                    this.style.background = "";
                    // je fais evoluer le marqueur
                    marqueur = false;
                }
            };
    
    
            // mouseover / mouseout
    
            // j'applique un changement de couleur au moment du survol
            div3.addEventListener('mouseover', function(){
                this.style.background = "green";
            });
    
            // j'applique un changement de couleur à la sortie de l'element du survol
            div3.addEventListener('mouseout', function(){
                div3.style.background = "black";
            });
    
            // mise en place d'un evenement survol sur des LI sur lesquels je boucle
    
            var mesLi = document.querySelectorAll('li');
    
            console.log(mesLi);
            console.log(document.querySelector('ol'))


            document.querySelector('ol').addEventListener('mouseover', function() {
                this.style.background = 'Silver';
            }) ; 
    
            for(var i=0; i< mesLi.length; i++){
                mesLi[i].addEventListener('mouseover', function(){
                    this.style.background = 'skyblue';
                    this.style.width = 'max-content' ;
                })
                mesLi[i].addEventListener('mouseout', function(){
                    this.style.background = '';
                })
            }

        // ***********************
        // formulaires


        // evenement focus

        // je selectionne mon input type text grace a son attribut name="monInput"
        console.log(document.querySelector('input[name=monInput]'));

        document.querySelector('input[name=monInput]').addEventListener('focus', function(){
            this.style.background = "yellow";
        });
        
        // evenement blur
        document.querySelector('input[name=monInput]').addEventListener('blur', function(){
            this.style.background = "";
        });

        // evenement submit / recuperation d'une donnée de formulaire

        // le submit doit se mettre en ecoute sur le formulaire
        
        monFormulaire.addEventListener('submit', function(event) {

            // fonction preventDefault() sur l'objet event (represente l'action naturelle d'une validation de formulaire = rechargement de page)
            event.preventDefault();

            // recuperation de la valeur (value) du champ de saisie
            console.log(monInput.value)
            var maSaisie = monInput.value;

            // affichage de la value du champ de saisie dans le paragraphe resultat
            resultat.innerText = 'Valeur du champ : ' + maSaisie;

        });

        // evenement lié a la frappe du clavier (keyup)

        saisie.addEventListener('keyup', function(){
            // nombre de lettres de la value de mon champ
            console.log(saisie.value.length);

            // on condition la couleur du contour du champ en fonction du nombre de lettres
            if(saisie.value.length > 4 && saisie.value.length < 11){
                saisie.style.outline = "2px solid green";
            }
            else{
                saisie.style.outline = "2px solid red";
            }
        });

        // annulation d'un lien sous condition

        document.querySelector('a').onclick = function(event){
            event.preventDefault();
            if(saisie.value == 'google'){
                // on envoie en js vers une url
                window.location.href = "https://google.fr";
            }
        };

        

        /* mes test */
        div2.addEventListener('dblclick', () => { 
            console.log('test');
            div2.style.backgroundColor = 'red';
        })
        
        /*
            console.dir(document.querySelector('input[name=monInput]'));

            document.querySelector('input[name=monInput]').addEventListener('focus', function() {
                this.style.background = 'yellow';
            }) ;
         */    
    
    
    
    
    
    
    };
    
    
    
    
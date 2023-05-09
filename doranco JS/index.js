'use strict';

        document.body.style.margin = '0' ;

        function commentaire(comm) {
            return document.createComment(`${comm}`)
        };

        var monCommentaire ;

        /* mes balises dans le head */
        /* Creer la premier balise meta dans le head*/
        console.log(document.createElement('meta')) ;
        var meta = document.createElement('meta') ;
        document.head.appendChild(meta) ;
        meta.setAttribute("charset", "UTF-8" ) ;

        /* mettre un commentaire avant la premiere balise meta */
        monCommentaire = 'les balises du head fait en js' ;
        meta.before(commentaire(monCommentaire)) ;

        /* creer la seconde balise meta dans le head */
        var meta2 = document.createElement('meta') ;
        document.head.appendChild(meta2) ;
        meta2.setAttribute("http-equiv", "X-UA-Compatible" ) ;
        meta2.setAttribute("content", "IE=edge" ) ;

        /* creer la troisieme baluse  */
        var meta3 = document.createElement('meta') ;
        document.head.appendChild(meta3) ;
        meta3.setAttribute("name", "viewport" ) ;
        meta3.setAttribute("content", "width=device-width, initial-scale=1.0" ) ;

        /* creer le titre de la page dans le head */
        var title = document.createElement('title') ;
        console.log(title) ;
        document.head.appendChild(title) ;
        title.innerText='Ma Page Web en JS' ;



        /* ma partie dans le body */

        monCommentaire = 'voici mon titre h1 fait en js' ;

        /* creer mon element br */
        console.log(document.createElement('br')) ;

        var br = document.createElement('br') ;

        /* recupere ma balise script par le name */
        var script = document.getElementsByName('script') ;

        console.log(document.scripts) ;

        /* creer une balise h1 et la mettre dans le body avant le script */
        var h1 = document.createElement('h1') ;
        document.scripts[0].before(h1);
        h1.before(commentaire(monCommentaire)) ;
        h1.innerText = 'Page web fait uniquement avec un script JS' ;
        h1.style.color ='red' ;

        /* creer une div et la placer avant le script  */
        monCommentaire = 'voici mon commentaire avant la div partie du body' ;

        var div = document.createElement('div') ;
        document.scripts[0].before(div);
        div.before(commentaire(monCommentaire)) ;
        div.style.backgroundColor = 'grey' ;
        
        /* faire un balise P dans le body */
        var p = document.createElement('p') ;
        div.appendChild(p);

        p.innerText = 'voici un paragraphe fait avec le javascript' ;
        p.style.color = 'lime' ;
        p.style.margin = '0' ;

        /* faire une balise style et la mettre dans le head */
        var style = document.createElement('style') ;
        console.log(style) ;
        document.head.appendChild(style) ;

        style.innerText = `h2 { background : pink ; color : blue ; width : max-content ; }` ;


        /* faire une balise h2 et la mettre avant le p */
        var h2 = document.createElement('h2') ;
        console.log(h2) ;
        p.before(h2) ;
        h2.innerText = 'voici mon titre H2' ;
        
        /* mettre un commentaire avant le paragraphe p */
        monCommentaire = "voici mon commentaire avant le p" ;
        p.before(commentaire(monCommentaire)) ;

        /* mettre un commentaire avant la balise h2 */
        monCommentaire = 'voici mon commentaire avant le h2'
        h2.before(commentaire(monCommentaire)) ;
        
        /* mettre un commentaire avant la balise article */
        monCommentaire = 'voici mon commentaire avant l\'article' ;

        div.appendChild(commentaire(monCommentaire)) ;

        /* mettre un article comme parent du p */
        var article = document.createElement('article') ;
        console.log(article) ;
        div.appendChild(article) ;

        /* creer mon element p */
        var p2 = document.createElement('p') ;


        /* dans cette article je vais mettre un autre p et ensuite mettre avant le p un titre h3 */
        article.appendChild(p2) ;
        p2.innerText = 'ici seras mon paragraphe P2 dans l\'article ou je mettrais un titre h3 avant le p' ;
        style.innerText += 'p2{ color : fuchsia ; background : silver}' ;

        /* faire mon titre h3 et l'introduire avant le p */
        var h3 = document.createElement('h3') ;
        h3.innerText = 'mon titre h3' ;

        /* mon commentaire a mettre avant le h3 pour la construcation de l'article en partant du bas */
        monCommentaire = 'mon commentaire avant le titre h3' ;
        p2.before(commentaire(monCommentaire)) ;
        p2.before(h3) ;

        /* mon commentaire a mettre avant le p de l'article */
        monCommentaire = 'mon commentaire avant le paragraphe et apres le titre h3'
        p2.before(commentaire(monCommentaire)) ;

        /* mettre du style au titre h3 */
        style.innerText += 'h3{color : chocolate}'
        
  
        



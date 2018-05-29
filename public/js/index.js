 var prog = [
   {
     title : "structure html",
     objectifs : [
       "Comprendre la structure html sous forme de boite",
        "Connaître les principales balises html",
        "Savoir insérer une feuille de style",
        "Comprendre les sélecteurs css pour appliquer les styles"  
     ],
   },
   {
     title : "Positionnement des balises avec flexbox",
     objectifs : [
       "Maitriser flexbox",
       "Organiser son style" 
     ],
   },
   {
     title : "fichiers publiques",
     objectifs : [
        "la notation des chemins /, ./ ../",
        "Les chemins dans le css",    
     ],
   },
   {
     title : "les sites responsives",
     objectifs : [
        "Comprendre les media querries",
        "Organiser son style",        
     ],
   },
   {
     title : "Javascript Object Notation (JSON)",
     objectifs : [
        "Maitriser l'ecriture d'objets javascript",
        "Faire la différence entre un objet js et un fichier json",        
     ],
   },
   {
     title : "Modifier le html avec javascript",
     objectifs : [
        "Sélectionner et manipuler des éléments du DOM avec javascript",
        "Créer et insérer des éléments dans le DOM avec javascript",        
     ],
   },
   {
     title : "Mon premier refactoring",
     objectifs : [
        "Comprendre ce qu'est un code DRY",
        "Améliorer le code avec des messages d'erreur",        
     ],
   },
   {
     title : "css to js",
     objectifs : [
        "Définir les styles avec javascript",
        "Introduire les émetteurs et écouteurs d'évenements",        
     ],
   },
   {
     title : "entrainement",
     objectifs : [
        "Consolider les acquis des exercices précédents",
     ],
   },
   {
     title : "html to jsx",
     objectifs : [
        "Se familiariser avec l'ecriture jsx",
        "connaitre les différences entre le jsx et le html",
        "ecrire son premier composant react",
     ],
   },
   {
     title : "les props",
     objectifs : [
        "Se familiariser avec les props dans react",
        "Comprendre le flux de données dans les composants react",
     ],
   },
   {
     title : "inline styles",
     objectifs : [
        "Savoir appliquer des classes et des styles en React",
        "Comprendre les différences au niveau des styles entre jsx et html",
     ],
   },
   {
     title : "Composant dynamique 1",
     objectifs : [
        "Comprendre comment mapper des données vers des balises html",
        "Savoir coder du js dans du html",
     ],
   },
   {
     title : "Composant dynamique 2",
     objectifs : [
        "S'entrainer à manipuler et mapper des données vers des balises html",
     ],
   },
   {
     title : "Composition de composants",
     objectifs : [
        "Composer des composants simplement",
         "Comprendre le flux de données entre parent et enfant",
     ],
   },
   {
     title : "Bibliothèques de composant",
     objectifs : [
        "Utiliser des composants react \"préfabriqué\" dans son code",
         "Découvrir Materil ui",
     ],
   },
   {
     title : "Entrainement",
     objectifs : [
        "Utiliser des composants react \"préfabriqué\" dans son code",
        "Découvrir Materil ui",
     ],
   },
   {
     title : "entrainement",
     objectifs : [
        "Consolider les aqcuis des précédents exercices",
     ],
   },
 ]
 
  var reactTheoryList = [
   {
     title : "les styles inline",
     description : "",
     link : "",
   },
    {
     title : "Composition de composants",
     description : "",
     link : "",
   },
   {
     title : "Utiliser react create app",
     description : "",
     link : "",
   },
    {
     title : "les cmposants stateless et statefull",
     description : "",
     link : "",
   },
   {
     title : "les cmposants stateless et statefull",
     description : "",
     link : "",
   },
  ]
 
 var jsTheoryList = [
   {
     title : "Le javascript moderne: évolution et applications",
     description : "",
     link : "",
   },
   {
     title : "web site, Web, hybrid, native, progressive app ??",
     description : "",
     link : "",
   },
   {
     title : "Le DOM (document object model)",
     description : "",
     link : "",
   },
   {
     title : "Programmation fonctionnelle et orientée objet",
     description : "",
     link : "",
   },
   {
     title : "Programmation objet (OOP)",
     description : "",
     link : "",
   },
   {
     title : "La boucle de rappel (callback loop)",
     description : "",
     link : "",
   },
   {
     title : "Les fermetures (closures)",
     description : "",
     link : "",
   },
   {
     title : "Les fonction pure (pure function)",
     description : "",
     link : "",
   },
   {
     title : "Les fonction de rappel (callback)",
     description : "",
     link : "",
   },
   {
     title : "Les fonctions récursives (recursive function)",
     description : "",
     link : "",
   },
   {
     title : "Les fonctions d’ordre supérieure (higher order function)",
     description : "",
     link : "",
   },
   {
     title : "Les émetteurs d'événements (events emitters)",
     description : "",
     link : "",
   },
   {
     title : "Le mot clé this (this keyword)",
     description : "",
     link : "",
   },
   {
     title : "Les expressions régulières (Regex)",
     description : "",
     link : "",
   },
   {
     title : "L’héritage par chaîne de prototype (prototypal inheritance)",
     description : "",
     link : "",
   },
   
 ]
 
 var webTheoryList = [
   {
     title : "Protocole http",
     description : "",
     link : "",
   },
   {
     title : "Protocole ssl",
     description : "",
     link : "",
   },
   {
     title : "Protocole SMTP",
     description : "",
     link : "",
   },
   {
     title : "Protocole mqtt",
     description : "",
     link : "",
   },
   {
     title : "Serveur DNS",
     description : "",
     link : "",
   },
   {
     title : "Serveur proxy",
     description : "",
     link : "",
   },
   {
     title : "Proxy inversé",
     description : "",
     link : "",
   },
   {
     title : "souscription (publish - subscribe pattern)",
     description : "",
     link : "",
   },
   
 ]

 
function isOdd(num) { return num % 2;}

 var buildNavigation = function(n){
     //BUILD NAVIGATION
  var nav = document.getElementById('navigation')
   var isRoot = window.location.href.split('/').slice(-1)[0]==='index.html'
   var startFolder = isRoot ? './' : './../'
   var startLinkPath = startFolder+'index.html'
  var startLink = document.createElement('a')
  
  startLink.setAttribute('href', startLinkPath)
  startLink.textContent="start"
  nav.appendChild(startLink)
  
  for (var i=0; i<n; i++){
    var link = document.createElement('a')
    var fileName = startFolder+'exercice'+(i+1).toString()+'/exercice'+(i+1).toString()+'.html'
    link.setAttribute('href', fileName)
    link.setAttribute('class', 'nav-item')
    link.textContent=(i+1).toString()
    nav.appendChild(link)
  }
 }
 
var buildTheory = function(list, id){
   var container = document.getElementById(id)
   list.forEach(function(item, index){
     var link = document.createElement('a')
     link.textContent=item.title
     link.setAttribute('href', '#')
     container.appendChild(link)
   })
 }
 
 
var buildStep = function(step, stepIndex){
   
   var stepContainer=document.createElement('div')
   var title = document.createElement('h3')
   var objectifs = document.createElement('ul')
   var goButton = document.createElement('button')
   
   goButton.textContent='GO'
   goButton.classList.add('go-button')
   goButton.onclick=function(){
      var nb=stepIndex
      var url = './exercice'+nb+'/exercice'+nb+'.html'
      window.location.href=url
   }
   
   title.textContent=stepIndex.toString()+' -   '+step.title
   step.objectifs.forEach(function(item, index){
      var objectif=document.createElement('li')
      objectif.textContent=item
      objectifs.appendChild(objectif)
    })
    
    stepContainer.appendChild(title)
    stepContainer.appendChild(objectifs)
    stepContainer.appendChild(goButton)
    
    return stepContainer
 }
 
var buildProgramme = function(prog){
  var container=document.getElementById('program-container')
  
  prog.forEach(function(item, index){
    var step = buildStep(item, (index+1))
    step.classList.add('step');
    var classToAdd = isOdd(index) ? 'dark' : 'light'
    step.classList.add(classToAdd);
    container.appendChild(step)
  })
}



window.onload = function(){
  
  buildNavigation(15)
  buildProgramme(prog)
  buildTheory(jsTheoryList, "javascript-theory")
  buildTheory(webTheoryList, "web-theory")
  buildTheory(reactTheoryList, "react-theory")
}
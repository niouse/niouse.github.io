
 var createNavigation = function(rootId, navs){
   
   if(typeof(rootId)!== 'string'){
     throw new Error('bleme 1')
   }
   
   var navContainer  = document.getElementById(rootId)
   
   if (navContainer=== null){
      throw new Error('bleme 2')
   }
   
   if(!navs instanceof Array){
     throw new Error('bleme 3')
   }
   
  var container= document.createElement('div')
  var nav = document.createElement('nav')

  nav.setAttribute('id', 'navigation')
  container.setAttribute('class', 'container')

  container.appendChild(nav)

  navs.forEach(function(item, index){
     var link = document.createElement('a')
     link.innerText=item.text
     link.setAttribute('class', 'navigation-button')
     link.setAttribute('href', item.link)
     nav.appendChild(link)
  })
  
  navContainer.appendChild(container)     
}  
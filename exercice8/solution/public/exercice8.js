var navStyles = {
   navigation : {
        display : "flex",
        justifyContent : "flex-end",
        fontSize : "0.8em",
        color:"#B5A9B7",
      },
      navigationButton : {
        padding : "0 8px 0 8px",
      }
}

const applyStyle = function(element, styles){
  for (var key in styles) {
    element.style[key]=styles[key]
  }
}


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
  applyStyle(nav, navStyles.navigation)
  nav.setAttribute('id', 'navigation')
  
  container.setAttribute('class', 'container')

  container.appendChild(nav)

  navs.forEach(function(item, index){
     var link = document.createElement('a')
     link.innerText=item.text
   //  link.setAttribute('class', 'navigation-button')
     applyStyle(link, navStyles.navigationButton)
     link.setAttribute('href', item.link)
     nav.appendChild(link)
  })
  
  navContainer.appendChild(container)     
}

const changeNavStyles = function () {
  console.log(document.screenWidth)
}

const beResponsive = function(){
  console.log(document.screenWidth)
  console.log('ley')
  window.addEventListener('resize', changeNavStyles)
}
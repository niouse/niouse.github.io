  document.addEventListener("DOMContentLoaded", function(event) {
      var showAide = document.getElementById('show-aide')
      var showSolution = document.getElementById('show-solution')
      
      var aide =  document.getElementById('aide')

      var isAideVisible = false

      showAide.onclick=function(){
        if (isAideVisible) {
          aide.style.display="inline"
        }
        else  aide.style.display="none"
        isAideVisible = !isAideVisible 
      }
      
      showSolution.onclick= function(){
        var url = './solution/'+window.location.href.split('/').slice(-1)[0]
        window.open(url,'_blank');
      }
});







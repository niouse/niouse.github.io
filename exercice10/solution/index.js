import React from 'react';
import ReactDOM from 'react-dom';

// Import du composant 
import MyCv from './my-cv/my-cv.component.js';


//En react et dans bcp de librairies on parle de rendre (render) un composant. Pour react, il s'agit de transformer le code js en éléments du DOM au sein d'une balise donnée
// Le code suivant veut dire litteralement : fait le rendu du composant MyCv au sein de l'élément du DOM qui a pour id la chaine de caractère "root". 
//React prend le soin de créer tous les élements comme on le faisait en vanilla (pure js) avec la méthode document.createElement()

ReactDOM.render(MyCv, document.getElementById('root'));


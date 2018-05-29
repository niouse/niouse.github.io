import React from 'react';

import Template from "./banner.template.js"
import styles from "./banner.styles.js"

// L'objet "styles" sera accessible dans le code du composant via l'objet "props". Pour y accéder il suffira d'ecrire "props.styles"
// Il ne s'agit pas de l'attribut "style" présent dans toutes les balises html. 
// la notation <Template /> n'est pas du html, c'est juste une synthaxe différent et qui ressemble à du html. Testez les deux lignes suivantes; elles sont équivalentes et il est tout à fait possible de coder en react sans utiliser du jsx
const MyCv = <Template styles={styles} /> // Ou bien
//const MyCv = React.createElement(Template, {styles : styles}, null)
      
// scr : https://reactjs.org/docs/react-without-jsx.html
      
export default MyCv

// Remarque

// On aurait pu ecrire :
//const MyCv = () => <Template styles={styles} />
// Dans ce cas il faut remplacer MyCv par <MyCv /> dans la méthode ReactDom.render index.js 

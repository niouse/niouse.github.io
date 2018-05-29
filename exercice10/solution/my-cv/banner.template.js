import React from 'react'
import styles from "./banner.styles.js"

//Import d'une image (le logo JS) directement dans le code 
//ATTENTION, cette mùanière d'importer une image est un outil de Create React App (ou plutot de la configuration de webpack dans CRA). En important l'image de cette manière, l'information est stockée dans une variable js sous forme de chaine de caractère hexadecimale. Ce format peut etre utilisé tel quel dans le code pour l'attribu src de la balise img. 
// Normalement, on importe pas une image, on indique son chemin. Sans untiliser CRA, on ecrirai <img src="./images/nodjs.png" />.
import nodejs from "./images/nodejs.png"

// Declaration d'un  "stateless component", ou "dumb component" en react : il s'agit d'une simple fonction qui prend un argument un unique objet appelé props
// L'objet props contient les données passées au composant en amont. Dans notre cas, nous avons passé l'objet "styles" dans index.js.
// Il y a plusieurs façons d'ecrire une fonction en js. Ci dessous on utilise une notation de ES6 appelée "fonctrion fleché" (voir "arrow function in js" dans google)
const Banner = () => {
  return (
     <header style={styles.header}>
        <div 
          id="banner"
          style={styles.container}
          >
            <div style={styles.centerBox}>
              <div id="photo-container">
              </div>
              <div style={styles.nodejsImgContainer}>
                <img id="diamond" src={nodejs} alt="#" style={styles.nodejsImg}/>
              </div>
              <div>
                <h2 style={styles.mainTitle}>Mon nom est <strong style={styles.name}>Gerard Gagnant</strong></h2>
                <h3 style={styles.secondaryTitle}>Développeur JAVASCRIPT</h3>
                <p style={styles.presentationText}>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,nisi elit consequat ipsum,nec sagittis sem nibh id elit.Duis. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,nisi elit consequat ipsum.</p>
              </div>
            </div>
             <div style={styles.arrowContainer}>
               <div style={styles.arrow}> </div>
            </div>
        </div> 
    </header>
  )
} 


export default Banner
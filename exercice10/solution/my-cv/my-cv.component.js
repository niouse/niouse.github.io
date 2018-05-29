import React from 'react';

import Template from "./banner.template.js"

// la notation <Template /> n'est pas du html, c'est juste une synthaxe différent et qui ressemble à du html. Testez les deux lignes suivantes; elles sont équivalentes et il est tout à fait possible de coder en react sans utiliser du jsx

const MyCv = <Template /> // Ou bien
//const MyCv = React.createElement(Template, null)
      
// scr : https://reactjs.org/docs/react-without-jsx.html
      
export default MyCv



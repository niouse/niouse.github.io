import React from 'react'


var Navigation = (props) => {
  
  const {
  styles, 
  navItems,
  setLanguage,
  scrollTo
  }=props
  
  return ( 
  <div style={styles.fixedWrapper}>
    <div 
      style={styles.container}
      >  
        <nav id="navigation"
          style={styles.navigation}
          >

          {
            navItems.map((item, index)=>{
              return( 
                <a 
                 style={styles.navButton}
                 href={item.link}
                 key={'navItem'+index}
                 onClick={(e)=>scrollTo(e, item.link)}>
                {item.text}
              </a>
              )
            })
          }
        </nav>
      </div>
    </div>
  )
}

export default Navigation
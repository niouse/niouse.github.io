import up from "./images/up.png"
import banner from "./images/banner.jpg"

const styles = {
   header : {
    display : "flex",
    flexDirection : "column",
    background: `url(${banner})`,
    minHeight:"700px",
    width:"100%",
    backgroundSize:"cover",
  },
  container : {
    margin : "0 auto 0 auto",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    flex : 1,
    maxWidth : "1080px",
  },
  centerBox : {
    display : "flex",
    flexDirection :  "row" ,
    justifyContent : "center",
    alignItems : "center",
    flex : 1,
    maxWidth : "800px",
    margin : "auto",
  },
  mainTitle : {
   textAlign : "left",
   color:"#C5B7B8",
    fontWeight: "bolder",
    fontSize: "30px",
    margin : 0,
    lineHeight: 1.1,
  },
  secondaryTitle : {
    textAlign : "left",
    color:"#fff",
    fontWeight: "bolder",
    fontSize: "2.5em",
    marginTop: "20px",
    marginBottom: "10px",
    lineHeight: 1.1,
  },
  name : {
    color:"#F1E9F2",
    fontSize:"1.2em",
    fontWeight:800,
  },
  presentationText : {
    textAlign : "left",
    color:"#F1E9F2",
    fontSize : "0.9em",
    lineHeight: 1.42857143,
    padding : "0px 10px 0px 10px"
  },
  nodejsImgContainer : {
    width : "250px",
    display : "flex",
    justifyContent : "center",
    paddingTop :  "0px",
  },
  nodejsImg : {
    height : "120px",
    margin : "0px auto 0px 0px",
    paddingRight : "40px",
  },
  arrowContainer : {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    height : "150px"
  },
  arrow : {
    background: `url(${up})`,
    width: "48px",
    height : "48px",
    cursor : "pointer",
  },
}

export default styles
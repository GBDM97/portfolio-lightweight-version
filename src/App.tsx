import React from "react";
import CV from "./CV";
import "./App.css";
import Animation2 from "./Animations/Animation2";
import Animation1 from "./Animations/Animation1";
import Animation3 from "./Animations/Animation3";
import VideoCard1 from "./Video/VideoCard1";
import VideoCard2 from "./Video/VideoCard2";
import img1 from './Media/test.png'
import img2 from './Media/p2.png'
import ContactMe from "./Forms/ContactMe";
import { CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import {createTheme} from "@mui/material/styles";
import { useState, useEffect } from "react";

export const theme = createTheme({
        palette: {
          primary: {
            main: '#ffffff',
          },
          secondary: {
                main: '#ffffff',
              },
        },
      });

const App = () => {
const [W,showW] = React.useState(true)
const pageChange = () =>{
    showW(true)
    window.scrollTo(0, 1700)
    window.location.reload();
   
}
const[A2H, setA2H] = React.useState(true)
const[A1H, setA1H] = React.useState(false)
const showA2 = () => {
  setTimeout(()=>{setA2H(false)}, 6250)
  setTimeout(()=>{setA1H(true)}, 6250)
}
showA2();

    if (W) return(
        <>
        <div className="boxCont1">
        <div className="typeBox">

          
          <Animation2
              hidden={A2H}
          />
          <Animation3/>

        </div>
    </div>
    <div className="gradient1"></div>
    <div className="titleContainer">this is my skillset:</div>
    <div className="sliderContainer">
        <div className="sBox1"><img src={require('./Media/html.png')} alt="HTML Logo" className="ht"></img>
            <p className="bTitleWhite">HTML5</p></div>
        <div className="sBox2"><img src={require('./Media/css.png')} alt="CSS Logo" className="logos"></img>
            <p className="bTitleWhite">CSS3</p></div>
        <div className="sBox3"><img src={require('./Media/javascript.png')} alt="Javascript Logo" className="logos"></img>
            <p className="bTitleBlack">&nbsp;JAVASCRIPT</p>
        </div>
        <div className="sBox4"><img src={require('./Media/node.png')} alt="Node.JS Logo" className="logos"></img>
            <p className="bTitleWhite">&nbsp;NODE.JS</p>
        </div>
        <div className="sBox5"><img src={require('./Media/typescript.png')} alt="Typescript Logo" className="logos"></img>
            <p className="bTitleWhite">&nbsp;TYPESCRIPT</p>
        </div>
        <div className="sBox6"><img src={require('./Media/react.png')} alt="React Logo" className="logos"></img>
            <p className="bTitleReact">&nbsp;REACT</p>
        </div>
        <div className="sliderCover"></div>
    </div>    
    <div className="sliderContainer"></div>
    <div className="sliderContainer"></div>
    <div className="titleContainer">links and downloads:</div>
    <div className="boxCont2">
        <div className="lineContainer">
            <div className="linkLogoCont">
                <div className="titleText" onClick={()=>{showW(false);
                window.scrollTo(0, 0)}}style={{cursor : 'pointer'}}>CV</div>
            </div>
            <div className="linkLogoCont">
                <a href="mailto:ghian.m@gmail.com" className="titleText"target="_blank" rel='noreferrer'>
                    <img src={require('./Media/mail.png')} alt="Mail" className="linkLogos"/>
                </a>
            </div>
            <div className="linkLogoCont">
                <a href="https://www.linkedin.com/in/ghiancarlo-morelli-b80400152" className="titleText"
                target="_blank" rel='noreferrer'>
                    <img src={require('./Media/linkedin.png')} alt="Linkedin" className="linkLogos"/>
                </a>
            </div>
        </div>
    </div>
    <div className="sliderContainer"></div>
    <div className="sliderContainer"></div>
    <div className="titleContainer">projects:</div>
    <div className="boxCont2">
            <VideoCard1 img={img1}/>
            <VideoCard2 img={img2}/>    
    </div>
    <div className="sliderContainer"></div>
    <div className="boxCont2">
            {/* <video className="video2 abs" height="auto" autoPlay loop muted>
                    <source src={require('./Media/nasa.mp4')} type="video/mp4"/>
            </video> */}
            <div className="titleContainer">contact me:</div>
            <ContactMe/>
    </div>

    </>
    )
    else return(
    <React.Fragment>
    <ThemeProvider theme={theme}>

        
            <div style={{display: "flex" , justifyContent : "flex-start", backgroundColor : "Black",
                    height : "100vh", alignItems: 'center', padding: '0px', flexDirection: 'column',
            }}>
                <div className="controls">
                    <a className="db" href={require("./Media/cv-08.2022.pdf")} download={require("./Media/cv-08.2022.pdf")}>download cv
                    </a>
                    <div className="closeB" onClick={pageChange}>X</div>
                </div>
                    
                        <div style={{zIndex: 2}}>
                        <CV/>
                        </div>

                        <div style={{position: "absolute", top: '50vh', zIndex: 1}}>
                        
                        <CircularProgress color='secondary'/>
                        
                        </div>
                    </div>
                    
                

            
            
    </ThemeProvider>
    </React.Fragment>
    )
}

export default App
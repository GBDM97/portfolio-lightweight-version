import React from "react";
import AnimationTitle1 from "./AnimationTitle1";
import DArrow from '@mui/icons-material/KeyboardArrowDownRounded';
import {createTheme} from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

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

const Animation3 = () => {

const [hide, setHide] = React.useState(true)
const [hide2, setHide2] = React.useState(true)
const [hide3, setHide3] = React.useState(true)
const [title, setT] = React.useState("HELLO !")
const [title2, setT2] = React.useState("")

const icon = (
                <div>
                        <div>
                                <DArrow sx={{ fontSize: 200, stroke: "#ffffff", strokeWidth: 0.05 }}/>
                        </div>
                        <div style={{position: 'absolute', top: '-50px', opacity: '0.35'}}>
                                <DArrow sx={{ fontSize: 200, stroke: "#ffffff", strokeWidth: 0.05 }}/>
                        </div>
                </div>
)

const showH = () => {
        setTimeout(()=>{setHide(false)}, 8000)
        setTimeout(()=>{setHide(true); setT("I AM A DEVELOPER")}, 9000)
        // setTimeout(()=>{setHide(true); setT2("DEVELOPER")}, 9000)
        // setTimeout(()=>{setHide2(false)}, 10000)
        setTimeout(()=>{setHide(false)}, 9250)
        setTimeout(()=>{setHide(true); setT("THAT'S MOTIVATED")}, 10250)
        setTimeout(()=>{setHide2(true); setT2("TO HAVE NEW IDEAS")}, 10250)
        setTimeout(()=>{setHide(false)}, 10500)
        setTimeout(()=>{setHide2(false)}, 11250)
        setTimeout(()=>{setHide(true); setT("AND ACCOMPLISH")}, 12500)
        setTimeout(()=>{setHide2(true); setT2("THE HARDEST GOALS")}, 12500)
        setTimeout(()=>{setHide(false)}, 12750)
        setTimeout(()=>{setHide2(false)}, 13500)
        setTimeout(()=>{setHide(true); setT("MY NAME IS")}, 14750)
        setTimeout(()=>{setHide2(true)}, 14750)
        setTimeout(()=>{setHide(false)}, 15000)
        setTimeout(()=>{setHide(true); setT("GHIANCARLO MORELLI")}, 16000)
        setTimeout(()=>{setHide(false)}, 16250)
        setTimeout(()=>{setHide3(false)}, 18500)
}


window.onload = function() {
showH();
};



return(
    <React.Fragment>
    <div className="Animation3">     
        <div className="whiteCover"></div>
        <div className="frontCover">
                <p className="mainTitle"></p>
                <p className="mainTitle"></p>
                
                <Box sx={{ position: 'absolute', height: 180, top: '75vh' }}>
                <Box sx={{ display: 'flex' }}>
                <Fade in={!hide3}>
                {icon}
                </Fade>
                </Box>
                </Box>
        </div>
        <div className="frontCover">
                <AnimationTitle1
                hide1={hide}
                title={title}
                />
                <AnimationTitle1
                hide1={hide2}
                title={title2}
                />
        </div>
    </div>      
    </React.Fragment>
)
}

export default Animation3
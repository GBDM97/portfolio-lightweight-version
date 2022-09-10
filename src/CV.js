import React from "react"  
import {Document,Page} from 'react-pdf/dist/esm/entry.webpack.js';

const CV = () => {    
//
//
const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);

window.addEventListener('resize', forceUpdate)
    
    //       
    
return (
        <React.Fragment>
                
                <div style={{position: 'relative'}}>
                <Document file={require('./Media/cv-08.2022.pdf')}>
                        <Page width={window.innerWidth * 0.8} pageNumber={1}/>
                        
                </Document>
                
                </div>
        </React.Fragment>
)      
}

export default CV
import React from "react";

export type CoverArgs = {
    hideW:string
    img:string
}

const VideoCover = ({hideW, img}:CoverArgs) => {
const[hidden, setH] = React.useState(false)

    const showV = () => {
        setH(true)
    }
    if (hidden) return (null)
    else return (
        <React.Fragment>
        <div className="videoCover">
                <img src={img} alt="test" className='imageCover'/>
                <p className={"projectsText white abs " + hideW} onClick={showV}>Watch Video&nbsp;&#9654;</p>
        </div>
        </React.Fragment>
    )
}

export default VideoCover
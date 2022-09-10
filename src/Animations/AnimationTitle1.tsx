import React from "react"

export type aTitle1 = {
    hide1:Boolean
    title:String
}

const AnimationTitle1 = ({hide1, title}:aTitle1) => {

if(hide1) return null
else return (
    <React.Fragment>
        <p className={"mainTitle aT15"}>{title}</p>
    </React.Fragment>
)   
}


export default AnimationTitle1
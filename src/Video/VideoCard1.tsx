import VideoCover from "./VideoCover";
import React from "react";

export type CardArgs = {
    img:string
}

const VideoCard1 = ({img}:CardArgs) => {
    return(
        <React.Fragment>
                <div className="projectsContainer">
                            <div className="videoContainer">
                                <VideoCover img={img} hideW={""}/>
                                <video className="video1" height="auto" controls >
                                <source src={require('../Media/hb.mp4')} type="video/mp4"/>
                                </video>
                            </div>
                            <div className="projectContainerText">
                                    <div className="skillsContainer">
                                            <p className="skillsBox">React</p>
                                            <p className="skillsBox">Typescript</p>
                                            <p className="skillsBox">Node.js</p>
                                            <p className="skillsBox">Javascript</p>
                                            <p className="skillsBox">Css</p>
                                            <p className="skillsBox">HTML</p>


                                    </div>
                                    <div className="projectsTitle black">HABIT BUILDER APP</div>
                                    <div className="line1"></div>
                                    <div className="projectsText black">This app offers a habit development 
                                    solution creating a plan of one year slowly incrementing the habit
                                    effort to make the person used to it. This app also gives valuable
                                    advices and directions on how to implement this new habit and follow
                                    the plan.</div>
                                    <a href="http://habitbuilder.rf.gd" className="button1"
                                    target="_blank" rel='noreferrer'>SEE LIVE</a>
                                    <a href="https://github.com/GBDM97/habit_builder" className="button1"
                                    target="_blank" rel='noreferrer'>SOURCE CODE</a>

                            </div>
                    </div>
        </React.Fragment>
    )
}

export default VideoCard1
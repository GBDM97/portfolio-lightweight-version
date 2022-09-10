import VideoCover from "./VideoCover";
import React from "react";

import type { CardArgs } from "./VideoCard1";

const VideoCard2 = ({img}:CardArgs) => {
    return(
        <React.Fragment>
                <div className="projectsContainer">
                            <div className="videoContainer">
                                <VideoCover img={img} hideW={"no"}/>
                                <video className="video1" height="190px" controls >
                                <source src={''} type="video/mp4"/>
                                </video>
                            </div>
                            <div className="projectContainerText">
                                    <div className="skillsContainer">
                                            <p className="skillsBox">Bootstrap</p>
                                            <p className="skillsBox">React</p>
                                            <p className="skillsBox">Typescript</p>
                                            <p className="skillsBox">Node.js</p>
                                            <p className="skillsBox">Javascript</p>
                                            <p className="skillsBox">Css</p>
                                            <p className="skillsBox">HTML</p>


                                    </div>
                                    <div className="projectsTitle black">E-COMMERCE APP FOR ENTERPRISES</div>
                                    <div className="line1"></div>
                                    <div className="projectsText black">Website for selling multiple 
                                    types of products, managing the inventory, and gathering valuable data
                                    from transactions and costumers, that way improving the business’s
                                    decision making ability.
                                    </div>
                                    <a href="" className="button0"
                                    target="_blank" rel='noreferrer'>COMING SOON</a>
                                    

                            </div>
                    </div>
        </React.Fragment>
    )
}

export default VideoCard2
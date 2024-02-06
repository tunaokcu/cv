import Project from "./Project";

import hull from "./../../assets/hull.png";
import octopus from "./../../assets/octopus.png";

function Projects(){
    return (
    <div className="cardWithoutHover">
        <h2>Projects</h2>
        <div style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "center", marginTop: "20px"}}>
            <Project image={hull} title={"Convex Hull"} link="https://www.youtube.com/watch?v=cQCvArzwctU&feature=youtu.be"><p>Convex hull algorithm visualizer. WebGL and JavaScript.</p></Project>
            <Project image={octopus} title={"Octopus Model"} link="https://tunaokcu.github.io/Octopus/"><p>Animatable hierarchical octopus model. WebGL and JavaScript.</p></Project>
        </div>
    </div>
    )
}

export default Projects;

//

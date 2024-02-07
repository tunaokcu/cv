import Project from "./Project";

import hull from "./../../assets/hull.png";
import octopus from "./../../assets/octopus.png";
import breather from "./../../assets/breather.png";

function Projects({language}){
    const projects = {"english": "Projects", "turkish": "Projeler", "japanese": "プロジェクト0"}
    const elements = {
        "hull": {
            "english": {title: "Convex Hull", text:"Convex hull algorithm visualizer. WebGL and JavaScript."},
            "turkish": {title: "Convex Hull (Dışbükey Kabuk)", text:"Convex hull algoritma görselleştiricisi. WebGL ve JavaScript."}
        },
        "octopus": {
            "english": {title: "Octopus Model", text:"Animatable hierarchical octopus model. WebGL and JavaScript."},
            "turkish": {title: "Ahtapot Modeli", text:"Anime edilebilir hiyerarşik ahtapot modeli. WebGL ve JavaScript."}
        },
        "breather": {
            "english": {title: "Parametric Surface Modelling", text:"Parametric generation of a breather surface. Phong and Gourard shading are implemented. WebGL and JavaScript."},
            "turkish": {title: "Parametrik Yüzey Modelleme", text:"Breather yüzeyinin parametrik jenerasyonu. Phong ve Gourard gölgelemesi implement edilmiştir. WebGL ve JavaScript"}
        }
    }

    return (
        <div className="cardWithoutHover">
        <h2>{projects[language]}</h2>
            <div style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "center", marginTop: "20px"}}>
                <Project image={hull} title={elements["hull"][language].title} link="https://www.youtube.com/watch?v=cQCvArzwctU&feature=youtu.be"><p>{elements["hull"][language].text}</p></Project>
                <Project image={octopus} title={elements["octopus"][language].title} link="https://tunaokcu.github.io/Octopus/"><p>{elements["octopus"][language].text}</p></Project>
                <Project image={breather} title={elements["breather"][language].title} link="https://tunaokcu.github.io/breatherSurfaces/"><p>{elements["breather"][language].text}</p></Project>
            </div>
        </div>
    )
}

export default Projects;

//

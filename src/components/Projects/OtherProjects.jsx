import Project from "./Project";


function OtherProjects({language}){
    const projects = {"english": "Other Projects", "turkish": "Başka Projeler", "japanese": "その他のプロジェクト"}
    const elements = {
        "pca": {
            "english": {title: "PCA and Logistic Regression", text:"PCA and Logistic Regression applied on MNIST dataset using only NumPy."}
        },
        "languageDefinition": {
            "english": {title: "Programming Language Definition", text:"Language specification using BNF for a programming language specialized for IOT applications. Working lexer and parser for the language using Lex and Yacc."}
        },
        "graphicsLibrary": {
            "english": {title: "3D Web Graphics Library", text:"WebGL-based 3D web graphics library. Scene graphs, modeling, resizable geometric primitives(plane, cube, sphere), lighting, camera, surface material, textured cubes, parametric surfaces, an incomplete obj file parser and loader. Work in progress."},
        },


    }

    return (
        <div className="cardWithoutHover">
            <h2>{projects[language]}</h2>
                <div style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "center", marginTop: "20px"}}>
                    <Project title={elements["pca"][language].title} link="https://github.com/tunaokcu/PCAandLogisticRegressionFromScratch"><p>{elements["pca"][language].text}</p></Project>
                    <Project title={elements["languageDefinition"][language].title} link="https://github.com/tunaokcu/Strada-Programming-Language-Definition"><p>{elements["languageDefinition"][language].text}</p></Project>
                    <Project title={elements["graphicsLibrary"][language].title} link="https://github.com/tunaokcu/breather.js"><p>{elements["graphicsLibrary"][language].text}</p></Project>
                </div>
        </div>
    )
}

export default OtherProjects;

//

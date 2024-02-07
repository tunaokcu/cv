import Project from "./Project";

import python from "./../../assets/MITpython.png";
import stanfordML from "./../../assets/stanfordML.jpeg";
import reactBasics from "./../../assets/metaReact.jpeg";
import tkinter from "./../../assets/guiPython.jpeg";
import microsoftC from "./../../assets/c.png";



function Certificates({language}){
    const certificates = {"english": "Certificates", "turkish": "Sertifikalar", "japanese": "修了証書"}
    const description = {"english": "You may click on any of the certificates to verify their authenticity."}
    const elements = {
        "python": {
            "english": {title: "6.00.1x: Introduction to Computer Science and Programming Using Python"}
        },
        "stanfordML": {
            "english": {title: "Supervised Machine Learning: Regression and Classification"}
        },
        "reactBasics": {
            "english": {title: "React Basics"}
        },
        "tkinter": {
            "english": {title: "Object-Oriented Programming and GUI with Python"}
        },
        "microsoftC": {
            "english": {title: "Foundational C# with Microsoft"}
        }
    }

    return (
        <div className="cardWithoutHover">
            <h2>{certificates[language]}</h2>
            <h3>{description[language]}</h3>
            <div style={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "center", marginTop: "20px"}}>
                <Project image={python} title={elements["python"][language].title} link="https://courses.edx.org/certificates/8b4c3750cd0a4e928f73ba0049b367c9"></Project>
                <Project image={stanfordML} title={elements["stanfordML"][language].title} link="https://www.coursera.org/account/accomplishments/verify/JUXGF2R45KXU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"></Project>
                <Project image={reactBasics} title={elements["reactBasics"][language].title} link="https://www.coursera.org/account/accomplishments/verify/R6MNHY7PAG4Q?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"></Project>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems:"center", marginTop: "20px"}}>
                <Project image={tkinter} title={elements["tkinter"][language].title} link="https://www.coursera.org/account/accomplishments/verify/TKQS38ZERE9S"></Project>
                <Project image={microsoftC} title={elements["microsoftC"][language].title} link="https://www.freecodecamp.org/certification/fcc61f3a902-ed7a-4c7b-8b52-ea956991a20a/foundational-c-sharp-with-microsoft"></Project>
            </div>
        </div>
    )
}

export default Certificates;

//

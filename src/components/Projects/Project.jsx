import "../styles.css";

function Project({image, title, link, children}){
    return  <div className="card">
        <h2>{title}</h2>
        <a target="_blank" href={link}>
        <img src={image} style={{objectFit:"contain", height:180}}></img>
        </a>
        {children}
    </div>
}

export default Project;
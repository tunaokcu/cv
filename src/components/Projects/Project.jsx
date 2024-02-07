import "../styles.css";

function Project({image=null, title, link, children}){
    return(
        <div className="card">
                <a target="_blank" href={link}>
                    <h2>{title}</h2>
                    {image && <img src={image} style={{objectFit:"contain", height:180}}></img>}
                </a>
            {children}
        </div>
    );
}

export default Project;
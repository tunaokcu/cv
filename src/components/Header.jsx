function Header({title="Tuna Okçu", subtitle="Senior computer engineering student at Bilkent set to graduate in 2025."}){
    return <div className="cardWithoutHover">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Contact></Contact>
    </div>
}

import linkedinLogo from "./../assets/linkedin.png";
import githubLogo from "./../assets/github.png";
import emailLogo from "./../assets/email.png";

function Contact({linkedin="https://www.linkedin.com/in/tuna-okcu/", github="https://github.com/tunaokcu", email="tunaokcuug@gmail.com" }){
    return <>
        <Logo link={linkedin} src={linkedinLogo}/>
        <Logo link={github} src={githubLogo}/>
        <EmailLogo email={email} src={emailLogo}/>
    </>
}

function Logo({link, src}){
    return <a href={link} target="_blank"><img src={src} style={{width: "50px", marginLeft:"5px"}}/></a>
}

function EmailLogo({email, src}){
    const successMessage = "Copied email (" + email + ") to clipboard. You may paste it anywhere with ctrl + v or right click + paste."
    const failureMessage =  'Failed to copy to clipboard.';

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(email);
            alert(successMessage);
        } catch (error) {
            console.error('Failed to copy:', error);
            alert(failureMessage);
        }
    };
    
      return (
          <img src={src} style={{ width: "50px", marginLeft: "5px", cursor: "pointer"}} onClick={handleClick} />
      );
}

export default Header;
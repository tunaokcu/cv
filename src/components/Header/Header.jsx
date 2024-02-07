function Header({title="Tuna Okçu", subtitleVsLanguages, language}){
    return<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}> 
        <div className="cardWithoutHover" >
            <h1>{title}</h1> 
            <h2>{subtitleVsLanguages[language]}</h2>
            <Contact language={language}></Contact>
        </div>
    </div>
}

import linkedinLogo from "./../../assets/linkedin.png";
import githubLogo from "./../../assets/github.png";
import emailLogo from "./../../assets/email.png";
import Dropdown from "./Dropdown";

function Contact({linkedin="https://www.linkedin.com/in/tuna-okcu/", github="https://github.com/tunaokcu", email="tunaokcuug@gmail.com", language }){
    return <>
        <Logo link={linkedin} src={linkedinLogo}/>
        <Logo link={github} src={githubLogo}/>
        <EmailLogo email={email} src={emailLogo} language={language}/>
    </>
}

function Logo({link, src}){
    return <a href={link} target="_blank"><img src={src} style={{width: "50px", marginLeft:"5px"}}/></a>
}

//TODO add jp
function EmailLogo({email, src, language}){
    const successMessage = {
                            "english": "Copied email (" + email + ") to clipboard. You may paste it anywhere with ctrl + v or right click + paste.",
                            "turkish": "Email (" + email + ") panoya kopyalandı. Ctrl + v veya sağ tık + yapıştır ile istediğiniz yere yapıştırabilirsiniz."
                            }

    const failureMessage =  {
                            "english": 'Failed to copy to clipboard.',
                            "turkish": "Panoya kopyalanamadı."
                            }

    const handleClick = async () => {
        try {
            await navigator.clipboard.writeText(email);
            alert(successMessage[language]);
        } catch (error) {
            alert(failureMessage[language]);
        }
    };
    
      return (
          <img src={src} style={{ width: "50px", marginLeft: "5px", cursor: "pointer"}} onClick={handleClick} />
      );
}

export default Header;
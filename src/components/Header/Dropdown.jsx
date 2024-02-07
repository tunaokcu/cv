import dropdownClosed from  "./../../assets/dropdown.png"
import dropdownOpen from "./../../assets/droppeddown.png"
import { useState } from 'react'

function Dropdown({setLanguage}){
    const [open, setOpen] = useState(false);

    function handleMouseEnter(){
        setOpen(true);
    }

    function handleMouseLeave(){
        setOpen(false);
    }

    function transitionToTr(){ setLanguage("turkish"); }
    function transitionToEng(){ setLanguage("english"); }

    let listElem = <ul style={{marginLeft:"30px"}}>
        <button onClick={transitionToTr} style={{width:"60px"}}>Tr</button><br></br>
        <button onClick={transitionToEng} style={{width:"60px"}}>Eng</button>
    </ul>

    return (
        <div style={{float:"right", marginLeft:"50px"}}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={open ? dropdownOpen : dropdownClosed} style={{height:"32px", width:"32px"}}/>
            {open && listElem}
        </div>


    );
}

export default Dropdown;
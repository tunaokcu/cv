import dropdownClosed from  "./../../assets/dropdown.png"
import dropdownOpen from "./../../assets/droppeddown.png"
import { useState } from 'react'

import {Link} from "react-router-dom";

const URL_BASE = "/cv"


function Dropdown(){
    const [open, setOpen] = useState(false);

    function handleMouseEnter(){
        setOpen(true);
    }

    function handleMouseLeave(){
        setOpen(false);
    }


    let listElem = <ul style={{marginLeft:"30px"}}>
        <li style={{width:"60px"}}><Link to={URL_BASE + "/tr"}>Tr</Link></li>
        <li style={{width:"60px"}}><Link to={URL_BASE + "/en"}>En</Link></li>
        <li style={{width:"60px"}}><Link to={URL_BASE + "/jp"}>Jp</Link></li>
    </ul>

    return (
        <div style={{float:"right", marginLeft:"50px"}}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={open ? dropdownOpen : dropdownClosed} style={{height:"32px", width:"32px"}}/>
            {open && listElem}
        </div>


    );
}

export default Dropdown;
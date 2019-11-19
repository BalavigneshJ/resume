import React, { useState } from 'react';
import About from "./About";
import School from "./School";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import Partners from "./Partners";
import Button from './Button';


function Resume() {

    const [ele, setEle] = useState(<Projects/>);
    const [active, setActive] = useState("Projects");

    const buttons = ["About" , "School" , "Work" , "Projects"] ;

    const handleClick = function (ev) {
        setActive(ev.target.innerText)
        switch (ev.target.innerText) {
            case 'Partners':
                return  setEle(<Partners />);
            case 'School':
                return setEle(<School />);
            case 'Work':
                return setEle(<Work />);
            case 'Projects':
                return setEle(<Projects />);
            case 'Contact':
                return setEle(<Contact />);
            default:
                return setEle(<About />) ;
        }
       
    }

    return (
        <div>
            <h1 className="name">
                Balavignesh Jagadeesan
            </h1>

            {
                buttons.map((b , i)=>{
                    return(
                        <Button className={ active === b ? 'active' : ''} skey={i} click={handleClick} name={b} />
                    );
                })
            }
            
            <hr />

            <div className="container">

                <div className="content">
                    {ele}
                </div>

                {/* <div className="vertical-line"></div> */}
                
            </div>

        </div>
    );
}

export default Resume;
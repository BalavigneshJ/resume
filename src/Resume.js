import React, { useState } from 'react';
import About from "./About";
import School from "./School";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import Partners from "./Partners";
import Button from './Button';


function Resume() {

    const [ele, setEle] = useState(<About/>);

    const buttons = ["About" , "School" , "Patners" , "Work" , "Projects"] ;

    const handleClick = function (ev) {
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
                    <Button click={handleClick} name={b} />
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
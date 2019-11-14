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

            <div className="seperatror">
                <hr />
            </div>

            <div className="container">

                <div className="content">
                    {ele}
                </div>

                <div className="vertical-line"></div>

                <div className="right-menu">
                    <Button click={handleClick} name={"About"} />
                    <Button click={handleClick} name={"School"} />
                    <Button click={handleClick} name={"Work"} />
                    <Button click={handleClick} name={"Projects"} />
                    <Button click={handleClick} name={"Contact"} />
                    <Button click={handleClick} name={"Partners"} />
                </div>
            </div>

        </div>
    );
}

export default Resume;
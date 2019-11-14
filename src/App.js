import React ,{ useState } from 'react';
import './App.css';
import resume from "./files/resume.pdf"
import Resume from './Resume';
import Button from './Button';

function App() {

  const [showPdf, setShowPdf] = useState(true);

  const handleClick = function(){
    setShowPdf(true);
  }

  const handleBack = function(){
    setShowPdf(false);
  }

  if(showPdf){
    return (
      <div>
        {/* <Button click={handleBack} name={"Resume"}/>  */}
        <Resume/>
      </div>
    );
  }else{
    return(
      <div>
        <Button click={handleClick} name={"Profile"}/>
        <embed src={resume} type="application/pdf" width="100%" height="900px" />
      </div>
    );
  }
}

export default App;

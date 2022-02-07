import React,{useState, useEffect} from "react";
import {Input} from 'antd';


function ButtonClick(){
  const [url,setUrl] = useState(null);
  const [print,setPrint] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState(" asd");
  const [click,setClick] = useState(false);


  function getUrl(val){

    setUrl(val.target.value)
    setClick(false);
    setIsLoaded(false);

    setPrint(false)

  }


  async function fetchTheme() {
    setClick(true);

    if (url.includes('https://') == false){
      await fetch(`https://us-central1-get-theme.cloudfunctions.net/getTheme?myshopify=https://${url}`)
      .then(response => response.text())
      .then((data) => {
        setIsLoaded(true);
        setTheme(data);
      });

    }else{
      await fetch(`https://us-central1-get-theme.cloudfunctions.net/getTheme?myshopify=${url}`)
      .then(response => response.text())
      .then((data) => {
        setIsLoaded(true);
        setTheme(data);
      });
    }

    console.log(theme);
    setPrint(true);
  }

    return (
      <div>
      {
        !isLoaded && click?
        <div>
        <p className="Result">Loading...</p>
        </div>
        :
        print?
        <div>
        <p className="Result">{"The theme detected is: "+ theme}</p>
        </div>
        :" "
      }
      <Input className = "input" placeholder="Enter URL: " onChange={getUrl}/> 
  
      <button class="button" onClick={fetchTheme}>Detect</button>

      </div>
    )

  


}





export default ButtonClick;
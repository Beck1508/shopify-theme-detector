import React,{useState, useEffect} from "react";
import {Input} from 'antd';



function FetchData(theurl) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch(theurl)
    //https://api.github.com/users/mralexgray/repos
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Result">
        {items.map(item => (
        <p key={item.id}>
          {item.name}
        </p>
        ))}
      </div>
  );
  }
}




function ButtonClick(){
  const [url,setUrl] = useState(null);
  const [print,setPrint] = useState(false);

  function getUrl(val){
    setUrl(val.target.value)
    setPrint(false)

  }
  

  return (
    <div>
    {
      print?
      <div>
{/* This part (FetchData) is not working */}
    {FetchData(url)}

      <p className="Result">{"The url entered is: "+url}</p>
      </div>
      :null
    }
    <Input className = "input" placeholder="Enter URL: " onChange={getUrl}/> 

    <button class="button" onClick={()=>setPrint(true)}>Detect</button>

    </div>
  )

}



// class ButtonClick extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {

//         url:""
//       };
//     }
//     detectUrl = () => {
//       this.setState({url:"No url was detected."});
//     }
//     render() {
//       return (
//         <div>
//           <p className="DetectedUrl">
//             {this.state.url}
//           </p>
//           <button
//             class="button"
//             onClick={this.detectUrl}
//           >Detect</button>
//         </div>

//       );
//     }
//   }

export default ButtonClick;
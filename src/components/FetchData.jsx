import React, {useState, useEffect}from "react";

function FetchData(theurl) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    theurl = "https://api.github.com/users/mralexgray/repos";
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(theurl)
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

  export default FetchData;
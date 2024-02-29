import { useState, useEffect } from "react";

export default function Main() {

const [data, setData] = useState({ Search: [] });

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=337d0224&s=matrix`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, []);

 return (
   <div>
       {data.Search.map((movie) => (
         <div key={movie.imdbID}>
           <h3>{movie.Title}</h3>
         </div>
       ))}
    </div>
 )
}

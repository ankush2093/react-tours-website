import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from './data'


function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);

  }
  if (tours.length === 0){
    return(
      <div className="refresh">
        <h2> No Tours Left  </h2>
        <img src="https://img.freepik.com/premium-vector/fisherman-fishing-silhouette-vector-illustration_599483-496.jpg"></img>
        <button className="ref-btn" onClick={() => setTours(data)}>
          Refresh</button>
      </div>
    );

    
  }


  return (
<div>
  
  <Tours tours={tours} removeTour={removeTour}></Tours>
</div>
  );
}

export default App;

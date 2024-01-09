import { useState, useEffect } from "react";
import axios from "axios";

import "./TripList.css";

const TripList = () => {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3005/trips");

  useEffect(() => {
    axios.get(url).then((result) => {
      setTrips(result.data);
    });

    // Cleaning callback
    return () => {
      // Do nothing for now
    };
  }, [url]);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3005/trips?location=Europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3005/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;

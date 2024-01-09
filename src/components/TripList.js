import { useState, useEffect } from "react";
import axios from "axios";

import "./TripList.css";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/trips").then((result) => {
      setTrips(result.data);
    });

    // Cleaning callback
    return () => {
      // Do nothing for now;
    };
  }, []);

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
    </div>
  );
};

export default TripList;

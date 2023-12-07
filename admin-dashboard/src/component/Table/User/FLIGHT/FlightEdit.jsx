<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditFlightForm() {
  const [flight, setFlight] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const apiUrl = `http://localhost:8800/api/flights/flights/${id}`;

  useEffect(() => {
    getFlight();
  }, [id]);

  const getFlight = async () => {
    try {
      const response = await axios.get(apiUrl, { withCredentials: true });
      const flightData = response.data;

      setFlight(flightData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching flight:", error);
    }
  };

  const handleSaveClick = () => {
    // Add logic to save the edited flight details
    console.log("Flight details saved:", flight);
    // Redirect back to the flight details page
    navigate(`/flights/${id}`);
  };

  const handleCancelClick = () => {
    // Redirect back to the flight details page without saving changes
    navigate(`/flights/${id}`);
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit Flight</h1>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Render a form with fields for editing flight details */}
          <label>Flight Type:</label>
          <input
            type="text"
            value={flight.flightType}
            onChange={(e) => setFlight({ ...flight, flightType: e.target.value })}
          />

          {/* Add other form fields for editing other flight details */}
          
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </>
  );
}

export default EditFlightForm;
=======
// FlightEdit.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FlightEdit() {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const [editedFlight, setEditedFlight] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/flights/${id}`, { withCredentials: true });
        setFlight(response.data);
        setEditedFlight(response.data); // Initialize the editedFlight state
      } catch (error) {
        console.error('Error fetching flight details:', error);
      }
    };

    fetchFlightDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedFlight((prevFlight) => ({
      ...prevFlight,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have an API endpoint for updating flight details
      await axios.put(`http://localhost:8800/api/flights/${id}`, editedFlight, { withCredentials: true });
      console.log('Flight details updated successfully!');
    } catch (error) {
      console.error('Error updating flight details:', error);
    }
  };

  if (!flight) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Flight Edit</h2>
      <p>Edit Flight ID: {flight._id}</p>
      <form onSubmit={handleSubmit}>
        <label>Departure Airport:</label>
        <input
          type="text"
          name="journeyAirport"
          value={editedFlight.journeyAirport}
          onChange={handleInputChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default FlightEdit;
>>>>>>> 31ffed3a5cfdbe63ff9c0fbb869f3657a69bef4d

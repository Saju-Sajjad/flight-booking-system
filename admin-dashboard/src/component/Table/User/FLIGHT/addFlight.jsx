<<<<<<< HEAD
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import axios from "axios";

const CreateFlightForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    airlineLogo: "",
    company: "",
    origin: "",
    destination: "",
    journeyDate: "",
    returnDate: "",
    journeyAirport: "",
    arrivalAirport: "",
    journeyTime: "",
    arrivalTime: "",
    status: "",
    hour: 0,
    seatEconomy: 0,
    seatBusiness: 0,
    seatAvailabilityEconomy: 0,
    seatAvailabilityBusiness: 0,
    fareAdultEconomy: 0,
    fareInfantEconomy: 0,
    fareChildEconomy: 0,
    fareAdultBusiness: 0,
    fareInfantBusiness: 0,
    fareChildBusiness: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Create a new FormData object with the missing fare fields
      const formDataWithFare = {
        ...formData,
        status: "Scheduled",
        fare: {
          economy: {
            adult: formData.fareAdultEconomy || 0,
            infant: formData.fareInfantEconomy || 0,
            child: formData.fareChildEconomy || 0,
          },
          business: {
            adult: formData.fareAdultBusiness || 0,
            infant: formData.fareInfantBusiness || 0,
            child: formData.fareChildBusiness || 0,
          },
        },
      };

      const response = await axios.post(
        "http://localhost:8800/api/flights/",
        formDataWithFare
      );

      if (response.data.success) {
        alert("Flight created successfully!");
        // Optionally, you can redirect or perform other actions after successful creation
      } else {
        alert("Failed to create flight. Check the console for details.");
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error creating flight:", error.message);
=======
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Grid } from '@mui/material';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

const FlightForm = () => {
  const [flightData, setFlightData] = useState({
    id: uuidv4(), // Generate a unique ID
    airlineLogo: '',
    company: '',
    origin: '',
    destination: '',
    fare: {
      business: { child: '', infant: '', adult: '' },
      economy: { child: '', infant: '', adult: '' },
    },
    hour: '',
    arrivalTime: '',
    journeyTime: '',
    arrivalAirport: '',
    journeyAirport: '',
    returnDate: '',
    journeyDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('fare.')) {
      const fareCategory = name.split('.')[1];
      const fareType = name.split('.')[2];

      setFlightData((prevData) => ({
        ...prevData,
        fare: {
          ...prevData.fare,
          [fareCategory]: {
            ...prevData.fare[fareCategory],
            [fareType]: value,
          },
        },
      }));
    } else {
      setFlightData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8800/api/flights', flightData);
      console.log('Flight created successfully:', response.data);
      console.log('Price:', response.data.flight.price);
      console.log('Flight Type:', response.data.flight.flightType);
    } catch (error) {
      console.error('Error creating flight:', error.message);
>>>>>>> 31ffed3a5cfdbe63ff9c0fbb869f3657a69bef4d
    }
  };
  

  return (
<<<<<<< HEAD
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Flight
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="ID"
                variant="outlined"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Airline Logo"
                variant="outlined"
                name="airlineLogo"
                value={formData.airlineLogo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company"
                variant="outlined"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Origin"
                variant="outlined"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Destination"
                variant="outlined"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Journey Date"
                variant="outlined"
                name="journeyDate"
                value={formData.journeyDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Return Date"
                variant="outlined"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Journey Airport"
                variant="outlined"
                name="journeyAirport"
                value={formData.journeyAirport}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Arrival Airport"
                variant="outlined"
                name="arrivalAirport"
                value={formData.arrivalAirport}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Journey Time"
                variant="outlined"
                name="journeyTime"
                value={formData.journeyTime}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Arrival Time"
                variant="outlined"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Hour"
                variant="outlined"
                name="hour"
                value={formData.hour}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Seat Economy"
                variant="outlined"
                name="seatEconomy"
                value={formData.seatEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Seat Business"
                variant="outlined"
                name="seatBusiness"
                value={formData.seatBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Seat Availability Economy"
                variant="outlined"
                name="seatAvailabilityEconomy"
                value={formData.seatAvailabilityEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Seat Availability Business"
                variant="outlined"
                name="seatAvailabilityBusiness"
                value={formData.seatAvailabilityBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Adult Economy"
                variant="outlined"
                name="fareAdultEconomy"
                value={formData.fareAdultEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Infant Economy"
                variant="outlined"
                name="fareInfantEconomy"
                value={formData.fareInfantEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Child Economy"
                variant="outlined"
                name="fareChildEconomy"
                value={formData.fareChildEconomy}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Adult Business"
                variant="outlined"
                name="fareAdultBusiness"
                value={formData.fareAdultBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Infant Business"
                variant="outlined"
                name="fareInfantBusiness"
                value={formData.fareInfantBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fare Child Business"
                variant="outlined"
                name="fareChildBusiness"
                value={formData.fareChildBusiness}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Status"
                variant="outlined"
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit} // Call the handleSubmit function when the button is clicked
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
=======
    <Container maxWidth="sm">
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create a New Flight
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="ID"
              fullWidth
              name="id"
              value={flightData.id}
              onChange={handleChange}
              margin="normal"
              disabled // disable editing of ID
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Airline Logo"
              fullWidth
              name="airlineLogo"
              value={flightData.airlineLogo}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Company"
              fullWidth
              name="company"
              value={flightData.company}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Origin"
              fullWidth
              name="origin"
              value={flightData.origin}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Destination"
              fullWidth
              name="destination"
              value={flightData.destination}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Business Child Fare"
              fullWidth
              name="fare.business.child"
              value={flightData.fare.business.child}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Business Infant Fare"
              fullWidth
              name="fare.business.infant"
              value={flightData.fare.business.infant}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Business Adult Fare"
              fullWidth
              name="fare.business.adult"
              value={flightData.fare.business.adult}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Economy Child Fare"
              fullWidth
              name="fare.economy.child"
              value={flightData.fare.economy.child}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Economy Infant Fare"
              fullWidth
              name="fare.economy.infant"
              value={flightData.fare.economy.infant}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Economy Adult Fare"
              fullWidth
              name="fare.economy.adult"
              value={flightData.fare.economy.adult}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Hour"
              fullWidth
              name="hour"
              value={flightData.hour}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Arrival Time"
              fullWidth
              name="arrivalTime"
              value={flightData.arrivalTime}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Price"
              fullWidth
              name="price"
              value={flightData.price}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Flight Type"
              fullWidth
              name="flightType"
              value={flightData.flightType}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Journey Time"
              fullWidth
              name="journeyTime"
              value={flightData.journeyTime}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Arrival Airport"
              fullWidth
              name="arrivalAirport"
              value={flightData.arrivalAirport}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Journey Airport"
              fullWidth
              name="journeyAirport"
              value={flightData.journeyAirport}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Return Date"
              fullWidth
              name="returnDate"
              value={flightData.returnDate}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Journey Date"
              fullWidth
              name="journeyDate"
              value={flightData.journeyDate}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>

        </Grid>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, mb:4 }}>
          Create Flight
        </Button>
      </form>
    </Box>
  </Container>
>>>>>>> 31ffed3a5cfdbe63ff9c0fbb869f3657a69bef4d
  );
};

export default FlightForm;

// flightRoute.js

import express from 'express';
import {
  createFlight,
  getAllFlights,
<<<<<<< HEAD
  getFlightByNumber, // Corrected function name
  updateFlight, // Corrected function name
  deleteFlight,
  getFlightByDate,
  cancelFlight,
  delayFlight
} from '../controllers/flightC.js'; // Replace with the actual path to your controller file
=======
  getFlightByNumber,
  updateFlight,
  deleteFlight, // Correct import syntax
  getFlightById,
  getFlightByDate
} from '../controllers/flightC.js';
>>>>>>> 31ffed3a5cfdbe63ff9c0fbb869f3657a69bef4d

const router = express.Router();
router.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});
// Create a new flight
router.post('/', createFlight);

// Get all flights
router.get('/flights', getAllFlights);

// Get a specific flight by flight number
router.get('/flights/:flightId', getFlightByNumber);


router.get('/flight/:date', getFlightByDate);


// Update a flight by flight number
router.put('/flights/:flightNumber', updateFlight);
<<<<<<< HEAD

router.delete('/flights/:flightNumber', deleteFlight);
router.put('/flights/:id/delay', delayFlight);
router.put('/flights/:id/cancel', cancelFlight);
=======
router.get('/flights/:id', getFlightById);
// Delete a flight by flight number

>>>>>>> 31ffed3a5cfdbe63ff9c0fbb869f3657a69bef4d
export default router;

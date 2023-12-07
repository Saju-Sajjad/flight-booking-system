"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formDefaultValues = void 0;
var formDefaultValues = {
  oneWayTrip: null,
  origin: "skardu",
  destination: "islamabad",
  journeyDate: "",
  returnDate: "",
  number_of_adults: 0,
  number_of_children: 0,
  number_of_infants: 0,
  adults: [{
    fullName: "",
    email: "",
    age: "",
    phone: "",
    gender: ""
  }],
  children: [{
    fullName: "",
    email: "",
    age: "",
    phone: "",
    gender: ""
  }],
  infants: [{
    fullName: "",
    email: "",
    age: "",
    phone: "",
    gender: ""
  }],
  airline: " ",
  cabin: "",
  adultFare: "",
  childFare: "",
  infantFare: "",
  // taxes: 10,
  // salesCommission: 10,
  // discount: 2,
  gender: "male",
  firstName: "test",
  surName: "test",
  date_of_birth: "10/10/10",
  email: "test@gmail.com",
  phone: "+92 35555071004",
  pnrNumber: "99999",
  ticket: "ticket number is one",
  issueBy: "test",
  ledger: "idk",
  code: "1000",
  grandTotal: 0,
  flight_id: null
};
exports.formDefaultValues = formDefaultValues;
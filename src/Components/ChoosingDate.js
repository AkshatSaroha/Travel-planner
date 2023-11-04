import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/choosingDate.css'; // Import your CSS file for styling

function ChoosingDate() {
  const [formData, setFormData] = useState({ destination: '', arrivalDate: null, departureDate: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrivalDateChange = (date) => {
    setFormData({ ...formData, arrivalDate: date });
  };

  const handleDepartureDateChange = (date) => {
    setFormData({ ...formData, departureDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, like sending it to a server or processing it.
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2>Travel Ease</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="destination">Where to?</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            placeholder="Enter your destination"
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Departure Date:</label>
          <DatePicker
            selected={formData.departureDate}
            onChange={handleDepartureDateChange}
            dateFormat="dd/MM/yyyy"
            className="date-picker"
          />
        </div>

        <div className="form-group">
          <label>Arrival Date:</label>
          <DatePicker
            selected={formData.arrivalDate}
            onChange={handleArrivalDateChange}
            dateFormat="dd/MM/yyyy"
            className="date-picker"
          />
        </div>

        

        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChoosingDate;

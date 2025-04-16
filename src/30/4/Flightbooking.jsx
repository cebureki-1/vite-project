import React, { useContext } from 'react';
import { FlightContext } from './flightContext.jsx';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const { selectedFlight } = useContext(FlightContext);
  const navigate = useNavigate();


  return (
    <div>
      <h1>Брондау</h1>
      <div>
        <strong>{selectedFlight.from} ✈️ {selectedFlight.to}</strong>
        <p>Уақыт: {selectedFlight.time}</p>
        <p>Авиакомпания: {selectedFlight.airline}</p>
        <p>Бағасы: {selectedFlight.price.toLocaleString()} KZT</p>
      </div>
      <form>
        <label>
          Жолаушы аты-жөні: 
          <input type="text" required />
        </label>
        <label>
          Ұшу күні:
          <input type="date" required />
        </label>
        <label>
          Орын таңдаңыз:
          <select required>
            {Array.from({ length: selectedFlight.seats }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Брондауды растау</button>
      </form>
      <button onClick={() => navigate('/')}>← Артқа</button>
    </div>
  );
};

export default Booking;
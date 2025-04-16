import { createContext, useState } from "react";

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
    const [flights, setFlights] = useState([]);
    const [booking, setBooking] = useState([]);

    return (
        <FlightContext.Provider value={{ 
            flights, setFlights,
             booking, setBooking 
             }}>
            {children}
        </FlightContext.Provider>
    );
}
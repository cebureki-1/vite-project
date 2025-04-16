import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlightList from './flightList.jsx';
import Flightbooking from './flightbooking.jsx';
import { FlightProvider } from './flightContext.jsx';


const App = () => {
    return (
        <FlightProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FlightList />} />
                    <Route path="/boohing/:id" element={<Flightbooking />} />
                </Routes>
            </BrowserRouter>
        </FlightProvider>
    );
};

export default App;
import { useEffect, useState } from 'react';

const mockFlights = [
  { id: 1, from: 'Almaty', to: 'Astana', price: 25000, time: '10:00', airline: 'Air Astana', seats: 50 },
  { id: 2, from: 'Almaty', to: 'Shymkent', price: 30000, time: '14:30', airline: 'SCAT', seats: 45 },
  { id: 3, from: 'Astana', to: 'Almaty', price: 28000, time: '16:00', airline: 'Qazaq Air', seats: 60 },
];

const useFetchFlights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFlights(mockFlights);
      setLoading(false);
    }, 1000);
  }, []);

  return { flights, loading };
};

export default useFetchFlights;
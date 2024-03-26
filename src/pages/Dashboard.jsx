import axios from 'axios';
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state)=> state.auth);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9ad672538cc4a1d62865240f6de1fa69');
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (!user) {
      navigate('/login');
    } else {
      fetchMovies();
    }
  }, [user, navigate]);

  if (!user) {
    return null; // O puedes mostrar un mensaje de redirección o carga aquí
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Popular Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

import axios from 'axios';
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import Card from '../components/Card'

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

  //funcion para dividir el array de peliculas en grupos de tres
  //const chunkArray = (arr, size) => {
   // const chunkedArr = [];
    //for (let i = 0; i < arr.length; i += size) {
      //chunkedArr.push(arr.slice(i, i + size));
   // }
   // return chunkedArr;
  //};

  // Divide el array de películas en grupos de tres
 // const moviesChunks = chunkArray(movies, 3);

  return (
      <div className='dashboard'>
      <h1>MoviPeli</h1>
      <div className="card-container">
        {movies.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

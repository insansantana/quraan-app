import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Surah from './components/Surah';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [surahs, setSurahs] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
      const getSurah = async () => {
          const response = await fetchSurah()
          setSurahs(response.data)
      }

    getSurah()

  }, [])

  const fetchSurah = async () => {
    const surah = await fetch(`https://api.quran.sutanlab.id/surah/`)
    const response = await surah.json()
    return response
  }

    return (
        <Router>
         <Route path="/" exact>
            <Home surahs={surahs} />
          </Route>
          <Route path="/:surah/:id">
            <Surah />
          </Route>
        </Router>
    );
}

export default App;

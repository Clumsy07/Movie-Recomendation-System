// import { Route } from '@mui/icons-material';
import { Container } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import SimpleBottomNavigation from './components/navigation/navigation';
import Trending from './pages/trending/trending';
import Movies from './pages/movies/movies';
import Series from './pages/series/series';
import Search from './pages/search/search';
// import { Switch } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Routes>
          <Route path="/" element={<Trending/>} exact/>
          <Route path="/movies" element={<Movies/>} exact/>
          <Route path="/series" element={<Series/>} exact/>
          <Route path="/search" element={<Search/>} exact/>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  )
    
}

export default App;

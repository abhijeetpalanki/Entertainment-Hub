import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from "@material-ui/core";
import './App.css';

// Pages
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

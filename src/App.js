import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage/MainPage';
import ContentPage from './pages/ContentPage/ContentPage';
import InfoPage from './pages/InfoPage/InfoPage';

import './App.css';
import BottomBar from './components/BottomBar/BottomBar';

function App() {
  return ( 
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/info" element={<InfoPage />} />
        </Routes>
        <BottomBar />
      </div>
    </BrowserRouter>
  )
}

export default App;

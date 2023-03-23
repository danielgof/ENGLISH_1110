import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage/MainPage';
import ContentPage from './pages/ContentPage/ContentPage';
import InfoPage from './pages/InfoPage/InfoPage';

import './App.css';

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
      </div>
    </BrowserRouter>
  )
}

export default App;

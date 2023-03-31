import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import MainPage from './pages/MainPage/MainPage';
import ContentPage from './pages/ContentPage/ContentPage';
import InfoPage from './pages/InfoPage/InfoPage';

import './App.css';
import BottomBar from './components/BottomBar/BottomBar';
import BuyOneGetOne from './pages/ContentPage/ObjectsPages/BuyOneGetOne/BuyOneGetOne';
import Discounts from './pages/ContentPage/ObjectsPages/Discounts/Discounts';
import LoyaltyPrograms from './pages/ContentPage/ObjectsPages/LoyaltyPrograms/LoyaltyPrograms';
import BundlingProducts from './pages/ContentPage/ObjectsPages/BundlingProducts/BundlingProducts';
import FreeTrials from './pages/ContentPage/ObjectsPages/FreeTrials/FreeTrials';
import ReferralPrograms from './pages/ContentPage/ObjectsPages/ReferralPrograms/ReferralPrograms';

function App() {
  return ( 
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/discounts" element={<BuyOneGetOne />} />
            <Route path="/byonegetone" element={<Discounts />} />
            <Route path="/lotaltyprograms" element={<LoyaltyPrograms />} />
            <Route path="/bundlingproducts" element={<BundlingProducts />} />
            <Route path="/freetrials" element={<FreeTrials />} />
            <Route path="/referralprograms" element={<ReferralPrograms />} />
        </Routes>
        <BottomBar />
      </div>
    </BrowserRouter>
  )
}

export default App;

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Content from './components/content/Content'; 
import Steam from './pages/steam/Steam';
import Water from './pages/Water/Water';
import Fuel from './pages/fuel/Fuel';
import Comair from './pages/comair/Comair';
import CO2 from './pages/co2/Co2';
import SteamTrend from './pages/steamtrend/Steamtrend'
import Kpi from './pages/kpi/Kpi'
import Elec from './pages/elec/Elec';
/* import Profile from './pages/profile/Profile'; */
import Mypage from './pages/mypage/Mypage'
import Tcontent from './pages/content/Content';

export default function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="steam" element={<Steam />} />
          <Route path="water" element={<Water />} />
          <Route path="fuel" element={<Fuel />} />
          <Route path="comair" element={<Comair />} />
          <Route path="co2" element={<CO2 />} />
          <Route path="steamtrend" element={<SteamTrend />} />
          <Route path="elec" element={<Elec />} />
          <Route path="kpi" element={<Kpi />} />
 {/*          <Route path="profile" element={<Profile />} /> */}
          <Route path="mypage" element={<Mypage />} />
          <Route path="content" element={<Tcontent />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>

    </div>
  );
}

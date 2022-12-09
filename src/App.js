import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Development } from './pages/Development';
import { EyeTracking } from './pages/EyeTracking';
import { Home } from './pages/Home';
import { IterativeDesign } from './pages/IterativeDesign';
import { Filter } from './pages/Filter';
import { NavBarItem } from './components/NavBarItem';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='home'>
    {<NavBarItem />}
    <Routes>
      <Route path="/final_portfolio" element={<Home />}/>
      <Route path="/final_portfolio/development" element={<Development />} />
      <Route path="/final_portfolio/eyetracking" element={<EyeTracking />}/>
      <Route path="/final_portfolio/iterativedesign" element={<IterativeDesign />} />
      <Route path="/final_portfolio/filter" element={<Filter />} />
    </Routes>
    </div>
  );
}

export default App;

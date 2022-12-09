import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Development } from './pages/Development';
import { EyeTracking } from './pages/EyeTracking';
import { Home } from './pages/Home';
import { IterativeDesign } from './pages/IterativeDesign';
import { Filter } from './pages/Filter';
import { NavBarItem } from './components/NavBarItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './pages/Layout'

function App() {
  return (
    <div className='home'>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="development" element={<Development />} />
        <Route path="eyetracking" element={<EyeTracking />}/>
        <Route path="iterativedesign" element={<IterativeDesign />} />
        <Route path="filter" element={<Filter />} />
      </Route>
      
    </Routes>
    </div>
  );
}

export default App;

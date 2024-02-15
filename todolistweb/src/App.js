import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NavComp } from './components/NavComp/NavComp';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div >
      <Router>
        <NavComp/>
        <Routes>
           <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

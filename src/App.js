import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import BagDetails from './components/DetailsPage/BagDetails';
import Home2 from './components/Home/Home2';

function App() {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path="/bag-details" element={<BagDetails />} />
      </Routes>
    </div >
  );
}

export default App;

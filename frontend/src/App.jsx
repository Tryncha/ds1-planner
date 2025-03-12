import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Planner from './pages/Planner/Planner';
import Explorer from './pages/Explorer/Explorer';

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">home</Link>
        <Link to="/planner">to planner</Link>
        <Link to="/explorer">to explorer</Link>
      </div>
      <Routes>
        <Route path="/planner" element={<Planner />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </Router>
  );
};

export default App;

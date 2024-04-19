import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Rating from './components/Rating';
import Search from './components/Search'

function App() {
  return (
    // <div className="App">
    //   <Dashboard/>
    // </div>
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Recommend</Link>
          </li>
          <li>
            <Link to="/rate">Rate</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* <Dashboard /> */}
        </Route>
        <Route path="/rate" element={<Rating />}>
          {/* <Rating /> */}
        </Route>
        <Route path="/search" element={<Search />}>
          {/* <Search /> */}
        </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;

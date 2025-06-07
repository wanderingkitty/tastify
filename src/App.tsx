import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import HomePage from './components/home-table/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
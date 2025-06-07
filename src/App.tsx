import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import HomePage from './components/home-table/HomePage';
import RecipesPage from './components/recipes/RecipesPage';
import ShoppingList from './components/shopping-list/ShoppingList';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/recipes-page" element={<RecipesPage />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
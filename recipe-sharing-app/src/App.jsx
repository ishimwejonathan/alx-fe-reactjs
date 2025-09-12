import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>
        <Link to="/">🍲 Recipe Sharing App</Link>
      </h1>

      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>
          Home
        </Link>
        <Link to="/favorites" style={{ marginRight: '1rem' }}>
          Favorites
        </Link>
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
            </>
          }
        />

        {/* Recipe Details */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />

        {/* Favorites Page */}
        <Route path="/favorites" element={<FavoritesList />} />

        {/* Recommendations Page */}
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </div>
  );
}

export default App;

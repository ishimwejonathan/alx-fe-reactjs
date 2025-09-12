// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>
        <Link to="/">🍲 Recipe Sharing App</Link>
      </h1>

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

        {/* Recipe Details Page */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
        🍳 Recipe Sharing Platform
      </h1>

      {/* ✅ Add New Recipe Button */}
      <div className="text-center mb-8">
        <a
          href="/add-recipe"
          className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          ➕ Add New Recipe
        </a>
      </div>

      {/* Recipe grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <a
              href={`/recipe/${recipe.id}`}
              className="text-green-600 font-medium hover:underline block mt-3"
            >
              View Recipe →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

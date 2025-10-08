import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-20">Loading recipe...</p>;
  }

  // Mock ingredients & instructions (since JSON didn’t include them)
  const ingredients = [
    "2 cups flour",
    "1 tbsp olive oil",
    "Salt to taste",
    "1/2 cup water",
  ];

  const instructions = [
    "Preheat oven to 180°C.",
    "Mix all ingredients in a bowl.",
    "Knead the dough until smooth.",
    "Bake for 20 minutes or until golden.",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold text-green-700 mb-4">
          {recipe.title}
        </h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            🥦 Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            👩‍🍳 Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          ← Back to Recipes
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;

import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!title || !ingredients || !steps) {
      setError("⚠️ Please fill out all fields before submitting.");
      return;
    }

    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientsList.length < 2) {
      setError("⚠️ Please include at least two ingredients.");
      return;
    }

    // If validation passes
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientsList,
      steps: steps.split("\n").filter((item) => item.trim() !== ""),
    };

    console.log("✅ New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully! (Check console)");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-10 md:px-10 md:py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg md:max-w-2xl md:p-10"
      >
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center md:text-4xl">
          📝 Add New Recipe
        </h1>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center font-medium md:text-base">
            {error}
          </p>
        )}

        {/* Title Input */}
        <div className="mb-5 md:mb-6">
          <label className="block text-gray-700 font-medium mb-2 md:text-lg">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Enter recipe title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 md:py-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients Input */}
        <div className="mb-5 md:mb-6">
          <label className="block text-gray-700 font-medium mb-2 md:text-lg">
            Ingredients (one per line)
          </label>
          <textarea
            placeholder="Enter ingredients..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 md:py-3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        {/* Preparation Steps Input */}
        <div className="mb-5 md:mb-6">
          <label className="block text-gray-700 font-medium mb-2 md:text-lg">
            Preparation Steps (one per line)
          </label>
          <textarea
            placeholder="Enter preparation steps..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 md:py-3"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-colors md:py-3 md:text-lg"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

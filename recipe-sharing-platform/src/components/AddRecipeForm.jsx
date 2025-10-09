import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // ✅ renamed from `error`

  // ✅ create a validate() function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "⚠️ Recipe title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "⚠️ Ingredients are required.";
    if (!steps.trim()) newErrors.steps = "⚠️ Preparation steps are required.";

    const ingredientsList = ingredients
      .split("\n")
      .filter((item) => item.trim() !== "");

    if (ingredientsList.length < 2) {
      newErrors.ingredients = "⚠️ Please include at least two ingredients.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // ✅ use the validate function

    // If validation passes
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n").filter((item) => item.trim() !== ""),
      steps: steps.split("\n").filter((item) => item.trim() !== ""),
    };

    console.log("✅ New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully! (Check console)");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          📝 Add New Recipe
        </h1>

        {/* ✅ Display general error messages */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-600 text-sm mb-4 text-center font-medium">
            {Object.values(errors).map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        )}

        {/* Title Input */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Enter recipe title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients Input */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            placeholder="Enter ingredients..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        {/* Preparation Steps Input */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps (one per line)
          </label>
          <textarea
            placeholder="Enter preparation steps..."
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

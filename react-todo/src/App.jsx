import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  const [useFormik, setUseFormik] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setUseFormik(!useFormik)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Switch to {useFormik ? "Controlled Form" : "Formik Form"}
      </button>

      {useFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("⚠️ Username is required"),
    email: Yup.string().email("⚠️ Invalid email").required("⚠️ Email is required"),
    password: Yup.string().min(6, "⚠️ Password must be at least 6 characters").required("⚠️ Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("✅ Formik User Registered:", values);
    alert("User registered successfully via Formik!");
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          ⚙️ Formik User Registration
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Username
              </label>
              <Field
                type="text"
                name="username"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default FormikForm;

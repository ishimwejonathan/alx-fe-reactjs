import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Formik Registration</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik form submitted:", values);
          alert("Formik Registration Successful!");
          resetForm();
        }}
      >
        {() => (
          <Form>
            {/* Username */}
            <div className="mb-4">
              <label className="block mb-2">Username:</label>
              <Field name="username" type="text" className="border p-2 w-full rounded" />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-2">Email:</label>
              <Field name="email" type="email" className="border p-2 w-full rounded" />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block mb-2">Password:</label>
              <Field name="password" type="password" className="border p-2 w-full rounded" />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;

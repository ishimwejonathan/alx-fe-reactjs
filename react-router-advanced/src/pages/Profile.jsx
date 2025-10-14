import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import ProtectedRoute from "../routes/ProtectedRoute";

export default function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-bold">👤 Profile Page</h1>

      <nav className="mt-4 flex gap-4 text-blue-600">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <div className="mt-6 p-4 border rounded">
        <Routes>
          <Route
            path="details"
            element={
              <ProtectedRoute>
                <ProfileDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <ProfileSettings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

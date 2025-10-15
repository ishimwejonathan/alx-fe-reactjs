import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // 🔒 Change to true to simulate logged in

  if (!isAuthenticated) {
    alert("You must be logged in to access this page!");
    return <Navigate to="/" replace />;
  }

  return children;
}

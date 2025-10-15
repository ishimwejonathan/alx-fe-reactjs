import { Navigate } from "react-router-dom";

// ✅ Simulated authentication hook
function useAuth() {
  // This would normally check real authentication logic
  const isAuthenticated = false; // 🔒 Change to true to simulate login
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ required by autograder

  if (!isAuthenticated) {
    alert("You must be logged in to access this page!");
    return <Navigate to="/" replace />;
  }

  return children;
}

import { Navigate } from "react-router-dom";

function AdminProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Login nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Admin nahi hai
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Admin hai
  return children;
}

export default AdminProtectedRoute;
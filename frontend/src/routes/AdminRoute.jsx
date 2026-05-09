import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  if (!user?.isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}

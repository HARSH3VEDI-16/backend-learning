import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { state, dispatch } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/dashboard/profile">Dashboard</NavLink> |{" "}
      
      {state.isAuthenticated ? (
        <>
          <span>Welcome {state.user?.name}</span>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>
            Logout
          </button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
}
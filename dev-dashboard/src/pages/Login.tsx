import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        name: "Harsh",
        email: "harsh@example.com",
      },
    });

    navigate("/dashboard/profile");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
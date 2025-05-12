import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  return (
    <div className="login">
      <h1 className="login-h1">Welcome to the Developer Dashboard</h1>
      <p className="login-p">Please login to access your dashboard</p>
      <p className="login-p">Click the button below to login</p>
      <button onClick={login} disabled={loading} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;

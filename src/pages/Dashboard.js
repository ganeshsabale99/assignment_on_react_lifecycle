import { useAuth } from "../contexts/AuthContext";
import ThemeToggle from "../components/ThemeToggle";
import UserProfileCard from "../components/UserProfileCard";
import { useRef, useState } from "react";
import "./style.css";
const Dashboard = () => {
  const { user, logout, loading, error } = useAuth();
  const inputRef = useRef();
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleStatusUpdate = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  if (loading) return <p>Loading your data…</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>Please login to see your dashboard</p>;

  return (
    <div className="dashboard">
      <h1>Developer Dashboard</h1>
      <ThemeToggle />
      <button className="logout" onClick={logout}>Logout</button>
      <UserProfileCard user={user} />
      <form onSubmit={handleStatusUpdate}>
        <input
          ref={inputRef}
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Update your status"
        />
        <button type="submit">Update Status</button>
      </form>
      <button onClick={() => inputRef.current.focus()}>Edit Status</button>
      {showToast && <div>Status Updated</div>}
    </div>
  );
};

export default Dashboard;

// src/pages/DashboardLayout.tsx
import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "200px", background: "#eee", padding: "10px" }}>
        <h3>Dashboard</h3>
        <NavLink to="profile">Profile</NavLink><br />
        <NavLink to="settings">Settings</NavLink>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
import { useRef } from "react";
import UserList from "./components/UserList";
import { useScrollSpy } from "./hooks/useScrollSpy";

function App() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const usersRef = useRef<HTMLDivElement>(null);
  const analyticsRef = useRef<HTMLDivElement>(null);
  const reportsRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "overview", ref: overviewRef },
    { id: "users", ref: usersRef },
    { id: "analytics", ref: analyticsRef },
    { id: "reports", ref: reportsRef },
  ];

  const activeSection = useScrollSpy(sections);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const buttonStyle = (section: string) => ({
    backgroundColor: activeSection === section ? "green" : "gray",
    color: "white",
    padding: "10px",
    border: "none",
    marginRight: "10px",
    cursor: "pointer",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dev Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <button style={buttonStyle("overview")} onClick={() => scrollTo(overviewRef)}>Overview</button>
        <button style={buttonStyle("users")} onClick={() => scrollTo(usersRef)}>Users</button>
        <button style={buttonStyle("analytics")} onClick={() => scrollTo(analyticsRef)}>Analytics</button>
        <button style={buttonStyle("reports")} onClick={() => scrollTo(reportsRef)}>Reports</button>
      </div>

      <UserList
        overviewRef={overviewRef}
        usersRef={usersRef}
        analyticsRef={analyticsRef}
        reportsRef={reportsRef}
      />
    </div>
  );
}

export default App;
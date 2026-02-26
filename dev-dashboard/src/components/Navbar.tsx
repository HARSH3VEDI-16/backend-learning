import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

function Navbar() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <div>
      <h2>Users List</h2>

      {loading && <p>🔄 Loading users...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && data.length === 0 && <p>No users found.</p>}

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
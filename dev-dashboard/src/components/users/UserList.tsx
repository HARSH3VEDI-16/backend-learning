import Button from "../ui/Button";

interface UserListProps {
  users: { id: number; name: string }[];
  loading: boolean;
  error: string | null;
  onFetch: () => void;
}

function UserList({ users, loading, error, onFetch }: UserListProps) {
  return (
    <div>
      <h2>Users</h2>

      <Button
        label={loading ? "Loading..." : "Fetch Users"}
        onClick={onFetch}
        disabled={loading}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.length === 0 && !loading && <p>No users yet.</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
import { RefObject, useEffect, useState } from "react";

interface Props {
  overviewRef: RefObject<HTMLDivElement>;
  usersRef: RefObject<HTMLDivElement>;
  analyticsRef: RefObject<HTMLDivElement>;
  reportsRef: RefObject<HTMLDivElement>;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = ({
  overviewRef,
  usersRef,
  analyticsRef,
  reportsRef,
}: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {/* Overview */}
      <div ref={overviewRef} style={{ height: "600px", padding: "20px" }}>
        <h2>Overview Section</h2>
      </div>

      {/* Users */}
      <div
        ref={usersRef}
        style={{ minHeight: "600px", padding: "20px", background: "#f4f4f4" }}
      >
        <h2>Users Section</h2>

        {loading && <p>Loading users...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading &&
          !error &&
          users.map((user) => (
            <div key={user.id} style={{ marginBottom: "10px" }}>
              <strong>{user.name}</strong>
              <div>{user.email}</div>
            </div>
          ))}
      </div>

      {/* Analytics */}
      <div ref={analyticsRef} style={{ height: "600px", padding: "20px" }}>
        <h2>Analytics Section</h2>
      </div>

      {/* Reports */}
      <div
        ref={reportsRef}
        style={{ height: "600px", padding: "20px", background: "#f4f4f4" }}
      >
        <h2>Reports Section</h2>
      </div>
    </div>
  );
};

export default UserList;
import { useSearchParams } from "react-router-dom";

export default function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const role = searchParams.get("role");

  return (
    <div>
      <h2>Users Page</h2>
      <p>Role: {role}</p>

      <button onClick={() => setSearchParams({ role: "admin" })}>
        Show Admin
      </button>
    </div>
  );
}
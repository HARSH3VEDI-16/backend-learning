import { Button } from "@/components/ui/button";
import UserCard from "./components/UserCard";
import { useUsers } from "./hooks/useUsers";

export default function UsersContainer() {
  const { users, loading, loadUsers } = useUsers();

  return (
    <div className="space-y-4">
      <Button onClick={loadUsers}>
        {loading ? "Loading..." : "Load Users"}
      </Button>

      <div className="space-y-2">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
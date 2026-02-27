import { useState } from "react";
import { Button } from "@/components/ui/button";
import UserCard from "@/components/users/UserCard"; // ✅ corrected path

function UsersContainer() {
  const [users, setUsers] = useState([
    { name: "Harsh", email: "harsh@email.com" },
    { name: "Dev", email: "dev@email.com" },
  ]);

  return (
    <div>
      <Button onClick={() => console.log("Load Users clicked")}>Load Users</Button>
      <div className="mt-4">
        {users.map((user, idx) => (
          <UserCard key={idx} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
}

export default UsersContainer;
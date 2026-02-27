import { Card } from "@/components/ui/card";
import { User } from "../services/usersService";

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p className="text-muted-foreground">{user.email}</p>
    </Card>
  );
}
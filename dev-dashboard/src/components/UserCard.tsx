type UserCardProps = {
  name: string;
  role: string;
  age: number;
};
export default function UserCard({ name, role, age }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Age: {age}</p>
    </div>
  );
}
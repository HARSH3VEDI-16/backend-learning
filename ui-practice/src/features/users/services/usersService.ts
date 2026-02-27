export interface User {
  id: number;
  name: string;
  email: string;
}

export function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Harsh", email: "harsh@email.com" },
        { id: 2, name: "Dev", email: "dev@email.com" },
      ]);
    }, 1000);
  });
}
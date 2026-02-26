import { useEffect } from "react";
import { fetchUsers } from "../features/users/usersSlice";
import { selectUsers, selectUserCount } from "../features/users/usersSelectors";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const count = useAppSelector(selectUserCount);
  const loading = useAppSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Total Users: {count}</h2>

      {loading && <p>Loading...</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
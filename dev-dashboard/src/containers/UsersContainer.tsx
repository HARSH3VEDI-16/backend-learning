import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUsers } from "../features/users/userSlice";
import UserList from "../components/users/UserList";

function UsersContainer() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state) => state.user
  );

  return (
    <UserList
      users={data}
      loading={loading}
      error={error}
      onFetch={() => dispatch(fetchUsers())}
    />
  );
}

export default UsersContainer;
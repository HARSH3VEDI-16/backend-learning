import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { fetchUsers } from "../features/users/userSlice";

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootState) => state.user.loading
  );

  return (
    <div>
      <button
        onClick={() => dispatch(fetchUsers())}
        disabled={loading}
      >
        {loading ? "Fetching..." : "Fetch Users"}
      </button>
    </div>
  );
}

export default Login;
import { fetchUsers } from "@/utils/actions";

const UsersList = async () => {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4 className="capitalize text-lg" key={user.id}>
                {user.firstName} {user.lastName}
              </h4>
            );
          })}
        </div>
      ) : (
        <div>no user</div>
      )}
    </div>
  );
};
export default UsersList;

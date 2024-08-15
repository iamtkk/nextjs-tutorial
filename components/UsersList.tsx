import { fetchUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

const UsersList = async () => {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4
                className="capitalize text-lg flex justify-between items-center mb-2"
                key={user.id}
              >
                {user.firstName} {user.lastName}
                <DeleteButton id={user.id} />
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

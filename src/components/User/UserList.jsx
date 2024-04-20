import Card from "../UI/Card";

const UserList = (props) => {
  const deleteUserHandler = (id) => {
    props.onDeleteUser(id);
    console.log(id);
  };
  return (
    <Card>
      <ul>
        {props.users ? (
          props.users.map((user) => {
            return (
              <li key={user.id}>
                <span>{user.id}-</span>
                <span>{user.username}</span>
                <button onClick={() => deleteUserHandler(user.id)}>
                  Delete User
                </button>
              </li>
            );
          })
        ) : (
          <h1>it's empty</h1>
        )}
      </ul>
    </Card>
  );
};

export default UserList;

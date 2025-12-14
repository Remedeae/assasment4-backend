type User = {
  id: string;
  userName: string;
  avatar?: string;
  joinDate: string; //fix up to be date
};

export default function AdminMenu() {
  const users: User[] = [
    { id: "1", userName: "Monica", joinDate: "2001-01-01" },
    { id: "2", userName: "Britta", joinDate: "2001-01-01" },
  ];

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.avatar && <img src={user.avatar} alt="User Avatar" />}
            <h4>{user.userName}</h4>
            <h5>Joined: {user.joinDate}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

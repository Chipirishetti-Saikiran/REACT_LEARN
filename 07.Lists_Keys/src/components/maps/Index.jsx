// components/maps/Index.jsx
const UserList = () => {
    const users = ["a", "b", "c"];

    return (
        <>
            {users.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </>
    );
};

export default UserList;

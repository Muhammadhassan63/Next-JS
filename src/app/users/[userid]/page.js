
async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/user/${id}`);
    data = await data.json();
    return data.result;
}

async function UserData({ params }) {
    const user = await getUsers(params.userid);

    const userStyle = {
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto'
    };

    const nameStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '5px'
    };

    const detailStyle = {
        fontSize: '18px',
        marginBottom: '10px'
    };

    return (
        <div style={userStyle}>
            <h1>User Details</h1>
            <h2 style={nameStyle}>{user.name}</h2>
            <h3 style={detailStyle}>Age: {user.age}</h3>
            <h3 style={detailStyle}>Email: {user.email}</h3>
        </div>
    );
}

export default UserData;

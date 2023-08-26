import React from 'react';
import Link from 'next/link';

async function getUsers() {
    let data = await fetch('http://localhost:3000/api/user');
    data = await data.json();
    return data;
}

async function Users() {
    const users = await getUsers();

    const containerStyle = {
    
        padding: '20px'
    };

    const linkStyle = {
        display: 'block',
        margin: '10px 0',
        fontSize: '18px',
        color: 'black',
        textDecoration: 'none'
    };

    return (
        <div style={containerStyle}>
            <h1>User Data</h1>

            {users.map((data, index) => (
                <div key={index}>
                    <Link href={`/users/${data.age}`}>
                        <p style={linkStyle}>{`Name: ${data.name}`}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Users;

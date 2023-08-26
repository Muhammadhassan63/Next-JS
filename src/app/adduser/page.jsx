// page.js
'use client'
import React, { useState } from 'react';
import './styles.css';

const Page = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddUser = async() => {
    // You can perform actions here with the user data (name, age, email)
    let response = await fetch("http://localhost:3000/api/user",{
        method: 'POST',
        body: JSON.stringify({name,age,email})

    })

    response= await response.json();
    if(response.success){
        alert("done")
    }else{
        alert('error')
    }
    console.log(response)


  };

  return (
    <div className="container">
      <h1>Add User</h1>
      <input
        className="input-field"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Age"
        value={age}
        onChange={handleAgeChange}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <button className="button" onClick={handleAddUser}>
        Add User
      </button>
    </div>
  );
};

export default Page;

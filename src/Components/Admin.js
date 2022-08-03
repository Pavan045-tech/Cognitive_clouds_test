import React from 'react'
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
        <h1>This is Admin Page</h1>
        <button>Add a Word here!</button>
        <button><Link to={"/I'm%20a%20User"}>search here!</Link></button>
    </div>
  );
}

export default Admin
import React from 'react'
import { Link } from 'react-router-dom';
import './css.css';

const Admin = () => {
  return (
    <div>
        <h1>This is Admin Page</h1>
        <Link to={'/add'}><button className='button'>Add a Word here!</button></Link>
        <Link to={"/I'm%20a%20User"}><button className='button'>search here!</button></Link>
    </div>
  );
}

export default Admin
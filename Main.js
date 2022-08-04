import React from 'react'
import { Link } from 'react-router-dom';
import './css.css';

const Main = () => {

    const [state,setstate]=React.useState("");

    const change = (event)=>{
        setstate(event.target.value);
    }
  return (
    <div>
        <h1>Welcome to Pavan Dictionary</h1>
        <h2>Please Choose the following to Move</h2>
        <select className='input' onChange={change}>
            <option>Choose Your Choice</option>
            <option>I'm admin</option>
            <option>I'm a User</option>
        </select>
        <Link to={`/${state}`}><button>Submit</button></Link>
    </div>
  );
}

export default Main
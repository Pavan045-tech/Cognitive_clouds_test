import React from 'react';
import './css.css';

const Add = () => {

    const Submit = ()=>{
        if(document.getElementsByClassName('word')[0].value){
            alert("The Word is Added to Dictionary");
        }
        else{
            alert("Please Enter the Word");
        }
    }
  return (
    <div className='main'>
        <h1>Please Enter Number and It's Definition</h1>
        <input className='word' placeholder='Enter the wortd!'></input>
        <textarea className='word' placeholder='Enter the meaning of the Word!'></textarea>
        <button className='submit' onClick={Submit}>Submit</button>
    </div>
  )
}

export default Add
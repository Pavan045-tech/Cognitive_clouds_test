import React from 'react'
import { Link } from 'react-router-dom';
import './css.css';

const User = () => {

    const [search,setsearch]=React.useState("pavan");
    const [Details,setDetails]=React.useState("");
    

    const Fetch = async () => {
        let api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        let details= await api.json();
        setDetails(details[0].word==`${search}`?details:alert("This word not in my Dictionary"));
    }

    const Result=()=>{
        console.log(Details);
        if(Details){
                return(
                        <div>
                        <Link to={`/Information`}><h1 className='definition'>The definition of {Details[0].word} is :</h1></Link>
                        {Details[0].meanings[0].definitions.map((item , key)=>{
                            return(
                                <div>
                                    <tr>
                                        <td className='line'><h2>{key+1}. {item.definition}</h2></td>
                                    </tr>
                                </div>
                            )
                        })}
                        </div>
                );
        }
    }

  return (
    <div>
        <h1>This is User Page</h1>
        <label htmlFor='search'>Please search a word : </label>
        <input className='input' onChange={(event)=>{setsearch(event.target.value)}} placeholder='Word here!'></input>
        <button onClick={Fetch}>submit</button>
        <Result/>
    </div>
  )
}

export default User
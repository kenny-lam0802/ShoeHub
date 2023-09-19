import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const[display, setDisplay] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/allShoes")
        .then((res)=>{
            setDisplay(res.data);
        })
        .catch((err)=>console.log(err));
    }, [])

    return (
        <div>
            <div>
                <h1>Welcome to ShoeHub!</h1>
                <Link to={'/create/new'}>Add your kicks</Link>
            </div>
            {
                display?.map((shoe, index)=>(
                    <div key={index}>
                        <Link to={`/view/${shoe._id}/shoe`}>{shoe.shoeName}</Link>
                    </div>
                ))
            }
        </div>
    )
}
export default Homepage
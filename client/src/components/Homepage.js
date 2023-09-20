import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Homepage = ({ shoes, setShoes }) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/allShoes")
            .then((res) => {
                setShoes(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    const removeFromDom = (id) => {
        const updatedShoes = shoes.filter((shoe) => shoe._id !== id)
        setShoes(updatedShoes)
    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteShoe/${id}`)
            .then((res) => {
                removeFromDom(id)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <div>
                <h1>Welcome to ShoeHub!</h1>
                <Link to={'/create/new'}>Add your kicks</Link>
            </div>
            {
                shoes.map((shoe) => (
                    <div key={shoe._id} className='shoeBox'>
                        <h2>{shoe.shoeName}</h2>
                        <div className='shoeInfo'>
                            <p>{shoe.type}</p>
                            <p>{shoe.description}</p>
                        </div>
                        <div className='shoeActions'>
                            <button> <Link to={`/edit/shoe/${shoe._id}`}>Edit kicks</Link></button>
                            <button onClick={() => deleteHandler(shoe._id)}>Delete Kicks</button>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}
export default Homepage
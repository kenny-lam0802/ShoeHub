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
        <div className='genreBody'>
                <div className='gridBody'>
                    <div className='grid-container'>
                    {
                        shoes.map((shoe) => (
                                <div key={shoe._id} className='shoeBox'>
                                    <img className='pic' src={shoe.image} />
                                    <h4>{shoe.shoeName}</h4>
                                    <div className='shoeInfo'>
                                        <h5 className='type'>{shoe.type}</h5>
                                        <hr/>
                                        <p className='desc'>{shoe.description}</p>
                                        <button className='topButton'> <Link className='link' to={`/edit/shoe/${shoe._id}`}>Edit kick</Link></button>
                                        <h4>—</h4>
                                        <button className='button' onClick={() => deleteHandler(shoe._id)}>Delete Kick</button>
                                    </div>
                                </div>
                        ))
                    }
                    </div>
                </div>
        </div>
    )
}
export default Homepage
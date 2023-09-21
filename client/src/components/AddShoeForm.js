import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const ShoeForm = ({ shoes, setShoes }) => {
    const [shoe, setShoe] = useState({
        shoeName: '',
        type: '',
        description: ""
    })

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setShoe({ ...shoe, [e.target.name]: e.target.value })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newShoes', shoe)
            .then(res => {
                console.log(res);
                console.log(res.data)
                navigate('/');
                setShoes([...shoes, res.data])
            })
            .catch((error) => {
                console.log("Form Error", error);
                setErrors(error.response.data.errors)
            });
    }


    return (
        <div className='formBody'>
            <h1>Add Shoe</h1>
            <hr/>
            <form onSubmit={submitHandler}>
                <div className='createForm'>
                    <div>
                        <label>Shoe Name:</label>
                        <input className='input' type='text' name='shoeName' value={shoe.shoeName} onChange={changeHandler} />
                        {
                            errors.shoeName ?
                                <p className='errMsg'>{errors.shoeName.message}</p>
                                :
                                null
                        }
                    </div>
                    <div>
                        <label>Shoe Type:</label>
                        <input className='input' type='text' name='type' value={shoe.type} onChange={changeHandler} />
                        {
                            errors.type ?
                                <p className='errMsg'>{errors.type.message}</p>
                                :
                                null
                        }
                    </div>
                    <div>
                        <label>Image <span className='span'>(copy image link)</span>:</label>
                        <input className='input' type='text' name='image' value={shoe.image} onChange={changeHandler} />
                        {
                            errors.image ?
                                <p className='errMsg'>{errors.image.message}</p>
                                :
                                null
                        }
                    </div>
                    <div className='description'>
                        <label className='descLabel'>Description:</label>
                        <textarea rows={5} cols={40} name='description' type="text" value={shoe.description} onChange={changeHandler} />
                        {
                            errors.description ?
                                <p className='errMsgDesc'>{errors.description.message}</p>
                                :
                                null
                        }
                    </div>
                    <div>
                        <button className='buttonForm'>Add Shoe</button>
                    </div>
                    <Link to={"/"} className='returnHome'>Return to Homepage</Link>
                </div>

            </form>

        </div>
    )
}

export default ShoeForm;

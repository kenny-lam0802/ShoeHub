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
        <div className="App">
            <h1>Add a Shoe</h1>
            <form onSubmit={submitHandler}>
                <div className='createForm'>
                    <div>
                        <label>Shoe Name:</label>
                        {
                            errors.shoeName ?
                                <p className='errMsg'>{errors.shoeName.message}</p>
                                :
                                null
                        }
                        <input type='text' name='shoeName' value={shoe.shoeName} onChange={changeHandler} />
                    </div>
                    <div>
                        <label>Shoe Type:</label>
                        {
                            errors.type ?
                                <p className='errMsg'>{errors.type.message}</p>
                                :
                                null
                        }
                        <input type='text' name='type' value={shoe.type} onChange={changeHandler} />
                    </div>
                    <div>
                        <label>Description</label>
                        {
                            errors.description ?
                                <p className='errMsg'>{errors.description.message}</p>
                                :
                                null
                        }
                        <textarea rows={5} cols={40} name='description' type="text" value={shoe.description} onChange={changeHandler} />
                    </div>
                    <div>
                        <button>Add Shoe</button>
                    </div>
                </div>
                <Link to={"/"} className='returnHome'>Return to Homepage</Link>

            </form>

        </div>
    )
}

export default ShoeForm;

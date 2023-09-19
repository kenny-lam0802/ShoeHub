import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const ShoeForm = (props) => {

    const [shoeName, setShoeName] = useState("");
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [inStock, setInStock] = useState("");
    const [description, setDescription] = useState("");
    const[errors, setErrors] = useState({});
    const navigate = useNavigate();
    

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/newShoes', {
        shoeName,
        type,
        size,
        inStock,
        description,
        })
            .then(res=>{
                console.log(res);
                console.log(res.data)
                setShoeName("");
                setType("");
                setSize("");
                setInStock("");
                setDescription("");
                navigate('/');
            })
            .catch((error)=>{
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
                            errors.shoeName?
                            <p className='errMsg'>{errors.shoeName.message}</p>
                            :
                            null
                        }
                        <input type='text' name='shoeName' value={shoeName} onChange={(e)=>setShoeName(e.target.value)}/>
                    </div>
                    <div>
                        <label>Shoe Type:</label>
                        {
                            errors.type?
                            <p className='errMsg'>{errors.type.message}</p>
                            :
                            null
                        }
                        <input type='text' name='type' value={type} onChange={(e)=>setType(e.target.value)}/>
                    </div>
                    <div>
                        <label>Sizes:</label>
                        {
                            errors.size?
                            <p className='errMsg'>{errors.size.message}</p>
                            :
                            null
                        }
                        <select name='size' value={size} onChange={(e)=>setSize(e.target.value)}>
                            <option value ="size">7</option>
                            <option value="size">8</option>
                            <option value="size">9</option>
                            <option value = "size">10</option>
                        </select>
                    </div>
                    <div>
                        <label>In stock:</label>
                    </div>
                    <div>
                        <label>Description</label>
                        {
                            errors.description?
                            <p className='errMsg'>{errors.description.message}</p>
                            :
                            null
                        }
                        <textarea rows={5} cols={40} name='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                        <div>
                            <input type='Submit' value='Create this Note' className='createSubmit'/>
                        </div>
                </div>
                <Link to={"/"} className='returnHome'>Return to Homepage</Link>
                
            </form>

        </div>
    )
}

export default ShoeForm;
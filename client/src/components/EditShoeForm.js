import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditForm = (props) =>{
    const [shoe, setShoe] = useState({
        shoeName:'',
        type:'',
        description:''
    })

    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const changeHandler = (e)=>{
        setShoe({...shoe,[e.target.name]: e.target.value})
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneShoes/${id}`)
            .then(res=>{
                setShoe(res.data)
            })
            .catch((error) => {
                console.log("Form Error", error);
                setErrors(error.response.data.errors)
            });
    }, [id])

    const updateHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/editShoes/${id}`, shoe)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log("Form Error", err);
                setErrors(err.response.data.errors)
                console.log(err.response.data.errors)
            });
    }

    // const deleteHandler = (id)=>{
    //     axios.delete(`http://localhost:8000/api/deleteShoe/${id}`)
    //         .then(res=>{
    //             navigate('/');
    //         })
    //         .catch(errors)
    // }

    return(
        <div className='formBody'>
            <h1>Edit Shoe entry</h1>
            <hr/>
            <form onSubmit={updateHandler}>
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
                    <Link className='returnHome' to={'/'}>Cancel Changes</Link>

                </div>
            </form>
        </div>
    )
}

export default EditForm;
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
        <div>
            <h1>Edit Shoe entry</h1>
            <form onSubmit={updateHandler}>
                <div className='createForm'>
                    <div>
                        <label>Shoe Name:</label>
                        {
                            errors.shoeName ?
                                <p className='errMsg'>{errors.shoeName.message}</p>
                                :
                                null
                        }
                        <input type='text' name='shoeName' value={shoe.shoeName} onChange={changeHandler}/>
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
                        <button>Update Shoe</button>
                    </div>
                </div>
            </form>
            <Link to={'/'}>Cancel Changes</Link>
        </div>
    )
}

export default EditForm;
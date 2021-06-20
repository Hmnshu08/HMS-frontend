import React, { useState } from 'react'
import './AddUser.css'
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';




function AddUser(){
const [formData, setFormData] = useState({});


const addUsers = async (event) =>{
    event.preventDefault();
    console.log(formData);
    const response = await axios.post("http://localhost:8088/users",formData).catch((err) => {
        console.log("Error: ", err)
    }).catch(error => {
        console.log(error.res)
    })

    if(response)
    {
        return <Redirect to='/user'  />
    }
    else
    {
        return <Redirect to='/user'  />
    }

    setFormData({});

}


const handleChange = (e) => {
    setFormData({...formData, [e.target.username]: e.target.value });
}




// function AddUser() {
//     // let history = useHistory();

//     const [users, setUser] = useState({
//         username: "",
//         pass: "",
//         email: "",
//         userType: ""
//     });

//     const { username, pass, email, userType } = users;

//     const onInputChange = e => {
//         setUser({ ...users, [e.target.username]: e.target.value })
//     }

    

//     const onSubmit = async e => {
//         e.preventDefault();
//         await axios.post("http://localhost:8088/users", users)
//         // history.push("/user");

//     }

    return (
        
        <div>
            <div className="addUser container">
                <Link className="btn btn-primary mr-2" to="/user/">Back</Link>
            </div>
            <div className="header">Add New User</div>

            <div className="userbody">
                <form className="container col-6" onSubmit={addUsers}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Username</label>
                            <input type="text" class="form-control" name="username" onChange={handleChange} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" name="pass" onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="email" className="form-control" placeholder="example@yahoo.com" name="email" onChange={handleChange} required/>
                    </div>
                    <div class="form-group">
                        <label for="inputState">Choose Role</label>
                        {/* <select id="inputState" class="form-control" name="userType" onChange={handleChange} required >
                            <option selected>Receptionist</option>
                            <option>Manager</option>
                            <option>Owner</option>
                        </select> */}
                        <input type="text" className="form-control" placeholder="role" name="userType" onChange={handleChange} required/>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </div>

        </div >
    )
}
export default AddUser

import React, { useState, useEffect, Component, useLayoutEffect } from 'react'
import { Link, useHistory, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditUser() {

    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        username: "",
        pass: "",
        email: "",
        userType: "",
    });

    const { username, pass, email, userType } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8088/users/${id}`, user)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "User is updated into database",
                    icon: "success",
                    timer: 3000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                history.push("/user");
                // document.location = "/user";


            })
            .catch(err => {
                console.log(err)
                swal(
                    "Error!", err.message,
                    "error"
                )
            });
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8088/users/${id}`);
        setUser(result.data);
    };









    return (
        <div>


            <div className="addUser container">
                <Link className="btn btn-danger mr-2" to="/user/">Cancel</Link>
            </div>

            <div className="header">Add New User</div>



            <div className="userbody">
                <form className="container col-6" /*onSubmit={handleSubmit}*/ onSubmit={e => onSubmit(e)}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Username</label>
                            <input type="text" class="form-control" name="username" value={username} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" name="pass" value={pass} onChange={e => onInputChange(e)} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="email" className="form-control" placeholder="example@yahoo.com" name="email" value={email} onChange={e => onInputChange(e)} required />
                    </div>
                    <div class="form-group">
                        <label for="inputState">Choose Role</label>
                        <select id="inputState" className="form-control" name="userType" value={userType} onChange={e => onInputChange(e)} required >
                            <option>Select One</option>
                            <option value="Receptionist">Receptionist</option>
                            <option value="Manager">Manager</option>
                            <option value="Owner">Owner</option>

                        </select>
                        {/* <input type="text" className="form-control" placeholder="role" name="userType" value={values.userType}  onChange={handleChange('userType')} required/> */}
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>





        </div>
    )
}

export default EditUser

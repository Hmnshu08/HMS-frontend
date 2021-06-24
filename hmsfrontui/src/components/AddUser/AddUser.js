import React, { useState } from 'react'
import './AddUser.css'
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';




function AddUser() {
    let history = useHistory();

    const [values, setValues] = useState({
        username: "",
        pass: "",
        email: "",
        userType: ""
    });

    // const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, pass, email, userType } = values;
        const user = { username, pass, email, userType };

        await axios.post('http://localhost:8088/users', user)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "User is added to database",
                    icon: "success",
                    timer: 2000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                // this.props.history.push("/user");
                history.push("/user");
                // document.location="/user";


            })
            .catch(err => {
                console.log(err)
                swal(
                    "Error!",err.message,
                    "error"
                )
            });
    };

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value });
    };


    return (

        <div>
            <div className="addUser container">
                <Link className="btn btn-primary mr-2" to="/user/">Back</Link>
            </div>
            <div className="header">Add New User</div>

            <div className="userbody">
                <form className="container col-6" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Username</label>
                            <input type="text" class="form-control" name="username" value={values.username} onChange={handleChange('username')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" class="form-control" name="pass" value={values.pass} onChange={handleChange('pass')} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="email" className="form-control" placeholder="example@yahoo.com" name="email" value={values.email} onChange={handleChange('email')} required />
                    </div>
                    <div class="form-group">
                        <label for="inputState">Choose Role</label>
                        <select id="inputState" className="form-control" name="userType" value={values.userType} onChange={handleChange('userType')} required >
                            <option >Select One</option>
                            <option value="Receptionist">Receptionist</option>
                            <option value="Manager">Manager</option>
                            <option value="Owner">Owner</option>

                        </select>
                        {/* <input type="text" className="form-control" placeholder="role" name="userType" value={values.userType}  onChange={handleChange('userType')} required/> */}
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div >

    )


}
export default AddUser

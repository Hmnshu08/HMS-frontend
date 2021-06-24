import React, { useState, useEffect, Component, useLayoutEffect } from 'react'
import { Link, useHistory, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditStaff() {
    let history = useHistory();
    const { id } = useParams();
    const [guest, setValues] = useState({
        name: "",
        email: "",
        gender: "",
        department: "",
        salary: "",
        contactNumber: "",
        position: ""
    });

    const { name, email, gender, department, salary, contactNumber, position } = guest;
    const onInputChange = e => {
        setValues({ ...guest, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        loadStaff();
    }, []);


    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8087/staff/${id}`, guest)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "Staff is updated into database",
                    icon: "success",
                    timer: 3000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                history.push("/staff");
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


    const loadStaff = async () => {
        const result = await axios.get(`http://localhost:8087/staff/${id}`);
        setValues(result.data);
    };




    return (
        <div>
            <div className="addUser container">
                <Link className="btn btn-danger mr-2" to="/staff/">Cancel</Link>
            </div>
            <div className="header">Add New Staff</div>

            <div className="userbody">
                <form className="container col-6" onSubmit={e => onSubmit(e)}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Name</label>
                            <input type="text" class="form-control" name="name" value={name} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Email</label>
                            <input type="email" class="form-control" name="email" value={email} onChange={e => onInputChange(e)} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Gender</label>
                            <select id="inputState" className="form-control" name="gender" value={gender} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>

                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Department</label>
                            <select id="inputState" className="form-control" name="department" value={department} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                <option value="Management">Management</option>
                                <option value="Front Desk">Front Desk</option>
                                <option value="Ground Staff">Ground Staff</option>
                            </select>

                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Salary</label>
                            <input type="number" class="form-control" name="salary" value={salary} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Contact</label>
                            <input type="text" class="form-control" name="contactNumber" value={contactNumber} onChange={e => onInputChange(e)} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Position</label>
                            <select id="inputState" className="form-control" name="position" value={position} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                <option value="Manager">Manager</option>
                                <option value="Receptionist">Receptionist</option>
                                <option value="Housekeeper">Housekeeper</option>
                            </select>

                        </div>
                    </div>
                    
                  
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default EditStaff

import React, { useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
function AddStaff() {

    let history = useHistory();

    const [values, setValues] = useState({
        name: "",
        email: "",
        gender: "",
        department: "",
        salary: "",
        contactNumber: "",
        position: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, gender, department, salary, contactNumber, position } = values;
        const staff = { name, email, gender, department, salary, contactNumber, position };

        await axios.post('http://localhost:8087/staff', staff)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "New Staff is added to database",
                    icon: "success",
                    timer: 2000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                // this.props.history.push("/user");
                history.push("/staff");
                // document.location="/user";


            })
            .catch(err => {
                console.log(err)
                swal(
                    "Error!", err.message,
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
                <Link className="btn btn-primary mr-2" to="/staff/">Back</Link>
            </div>
            <div className="header">Add New User</div>

            <div className="userbody">
                <form className="container col-6" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Name</label>
                            <input type="text" class="form-control" name="name" value={values.name} onChange={handleChange('name')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Email</label>
                            <input type="email" class="form-control" name="email" value={values.email} onChange={handleChange('email')} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Gender</label>
                            <select id="inputState" className="form-control" name="gender" value={values.gender} onChange={handleChange('gender')} required >
                                <option >Select One</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>

                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Department</label>
                            <select id="inputState" className="form-control" name="department" value={values.department} onChange={handleChange('department')} required >
                                <option >Select One</option>
                                <option value="Management">Management</option>
                                <option value="Front Desk">Front Desk</option>
                                <option value="Ground Staff">Ground Staff</option>
                            </select>

                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Salary</label>
                            <input type="number" class="form-control" name="salary" value={values.salary} onChange={handleChange('salary')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Contact</label>
                            <input type="text" class="form-control" name="contactNumber" value={values.contactNumber} onChange={handleChange('contactNumber')} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Position</label>
                            <select id="inputState" className="form-control" name="position" value={values.position} onChange={handleChange('position')} required >
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

export default AddStaff

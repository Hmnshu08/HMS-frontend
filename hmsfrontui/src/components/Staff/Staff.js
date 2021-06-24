import React, { useState, useEffect, Component, Components } from 'react';
import axios from 'axios';
import {
    Container
} from 'reactstrap';
import { async } from 'regenerator-runtime';
import { Link } from 'react-router-dom';
import AddUser from '../AddUser/AddUser';
import swal from 'sweetalert';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";

function Staff() {

    const [staff, setStaff] = useState([]);

    useEffect(() => {
        loadStaff();
    }, []);

    const loadStaff = async () => {
        const result = await axios.get("http://localhost:8087/staff");
        setStaff(result.data.reverse());
    }



    const deleteStaff = async id => {

        await
            swal({
                title: "Are you sure?",
                text: "You want to delete this staff?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })

                .then(willDelete => {
                    if (willDelete) {
                        axios.delete(`http://localhost:8087/staff/${id}`)
                            // loadUsers()
                            .then(res => {
                                swal({
                                    title: "Done!",
                                    text: "Staff is deleted",
                                    icon: "success",
                                    timer: 2000,
                                    button: false
                                })
                                loadStaff();
                            })
                            .catch(err => {
                                console.log(err)
                                swal(
                                    "Error!", err.message,
                                    "error"
                                )
                            });

                        // history.push("/user");
                        // document.location="/user";


                    }
                });
    };

    return (
        <div>
            <Container>

                <div className="userbody">
                    <div className="header">
                        Staff Data
                    </div>
                    <div className="addUser">
                        <Link className="btn btn-primary mr-2" to="/staff/add">Add New Staff</Link>
                    </div>
                    <div class="table-responsive-sm">
                        <table class="table shadow table-hover table-sm">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    staff.map((staffs, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{staffs.name}</td>
                                            <td>{staffs.email}</td>
                                            <td>{staffs.gender}</td>
                                            <td>{staffs.department}</td>
                                            <td>{staffs.salary}</td>
                                            <td>{staffs.contactNumber}</td>
                                            <td>{staffs.position}</td>
                                            <td>
                                                <Link className="btn btn-primary mr-2" to={`/staff/ViewStaff/${staffs.id}`}>View</Link>
                                                <Link className="btn btn-outline-info mr-2" to={`/staff/EditStaff/${staffs.id}`}>Edit</Link>
                                                <Link className="btn btn-danger mr-2" onClick={() => deleteStaff(staffs.id)}>Delete</Link>
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Staff

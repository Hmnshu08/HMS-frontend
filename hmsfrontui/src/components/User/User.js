import React, { useState, useEffect, Component, Components } from 'react';
import './user.css'
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



function User() {
    let history = useHistory();
    const [user, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8088/users");
        setUser(result.data.reverse());
    }




    const deleteUser = async id => {

        await
            swal({
                title: "Are you sure?",
                text: "You want to delete this user?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })

                .then(willDelete => {
                    if (willDelete) {
                        axios.delete(`http://localhost:8088/users/${id}`)
                        // loadUsers()
                            .then(res => {
                                swal({
                                    title: "Done!",
                                    text: "user is deleted",
                                    icon: "success",
                                    timer: 2000,
                                    button: false
                                })
                                loadUsers();
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

        // swal({
        //     title: "Are you sure?",
        //     text: "You want to delete this user?",
        //     icon: "warning",
        //     dangerMode: true,
        // })

        // await axios.delete(`http://localhost:8088/users/${id}`)
        // .then(res => {
        //     swal({
        //         title: "Done!",
        //         text: "updated into database",
        //         icon: "success",
        //         timer: 3000,
        //         button: false
        //     })
        //     // this.setState({ redirect: "/user" });
        //     // history.push("/user");
        //     // document.location = "/user";


        // })
        // .catch(err => {
        //     console.log(err)
        //     swal(
        //         "Error!", err.message,
        //         "error"
        //     )
        // });
        






    };

    return (
        <div>
            <Container>

                <div className="userbody">
                    <div className="header">
                        User Data
                    </div>
                    <div className="addUser">
                        <Link className="btn btn-primary mr-2" to="/user/add">Add New User</Link>
                    </div>
                    <div class="table-responsive-sm">
                        <table class="table shadow table-hover table-sm">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    {/* <th scope="col">Password</th> */}
                                    <th scope="col">User Type</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((users, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{users.username}</td>
                                            {/* <td>{users.pass}</td> */}
                                            <td>{users.userType}</td>
                                            <td>{users.email}</td>
                                            <td>
                                                <Link className="btn btn-primary mr-2" to={`/user/ViewUser/${users.id}`}>View</Link>
                                                <Link className="btn btn-outline-info mr-2" to={`/user/EditUser/${users.id}`}>Edit</Link>
                                                <Link className="btn btn-danger mr-2" onClick={() => deleteUser(users.id)}>Delete</Link>
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
export default User
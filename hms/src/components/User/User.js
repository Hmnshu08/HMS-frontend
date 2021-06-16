import React, { useState, useEffect } from 'react'
import './user.css'
import axios from 'axios';
import {
    Container
} from 'reactstrap';
import { async } from 'regenerator-runtime';
import { Link } from 'react-router-dom';


export default function User() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8088/users");
        setUser(result.data);
    }


    return (
        <div>
            <Container>
                <div className="userbody">
                    <div className="header">
                        User Data
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
                                                <Link className="btn btn-primary mr-2">View</Link>
                                                <Link className="btn btn-outline-info mr-2">Edit</Link>
                                                <Link className="btn btn-danger mr-2">Delete</Link>
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

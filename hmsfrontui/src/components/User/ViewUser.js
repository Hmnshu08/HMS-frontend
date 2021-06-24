import axios from 'axios';
import React, { useState, useEffect, Component, Components } from 'react';
import {
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
function ViewUser() {
    const [user, setUser] = useState({

        username: "",
        email: "",
        userType: "",
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:8088/users/${id}`);
        setUser(res.data);
    };



    return (
        <div>
            <Container>
                <div className="userbody">
                    <div className="header">
                        User Data
                    </div>
                    <div className="addUser">
                        <Link className="btn btn-primary mr-2" to="/user">Back</Link>
                    </div>

                    <ul className="list-group w-50">
                        <li className="list-group-item">User unqiue ID: {user.id}</li>
                        <li className="list-group-item">User name: {user.username}</li>
                        <li className="list-group-item">Email: {user.email}</li>
                        <li className="list-group-item">User Type Role: {user.userType}</li>
                    </ul>
                </div>
            </Container>

        </div>
    )
}

export default ViewUser

import axios from 'axios';
import React, { useState, useEffect, Component, Components } from 'react';
import {
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

function ViewStaff() {

    const [staff, setStaff] = useState({

        name: "",
        email: "",
        gender: "",
        department: "",
        salary: "",
        contactNumber: "",
        position: ""
    });

    const { id } = useParams();
    useEffect(() => {
        loadStaff();
    }, []);

    const loadStaff = async () => {
        const res = await axios.get(`http://localhost:8087/staff/${id}`);
        setStaff(res.data);
    };



    return (
        <div>
            <Container>
                <div className="userbody">
                    <div className="header">
                        Staff Data
                    </div>
                    <div className="addUser">
                        <Link className="btn btn-primary mr-2" to="/staff">Back</Link>
                    </div>

                    <ul className="list-group w-50">
                        <li className="list-group-item">Staff unqiue ID: {staff.id}</li>
                        <li className="list-group-item">Name: {staff.name}</li>
                        <li className="list-group-item">Email: {staff.email}</li>
                        <li className="list-group-item">Gender: {staff.gender}</li>
                        <li className="list-group-item">Department: {staff.department}</li>
                        <li className="list-group-item">Salary: {staff.salary}</li>
                        <li className="list-group-item">Contact: {staff.contactNumber}</li>
                        <li className="list-group-item">Position: {staff.position}</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default ViewStaff

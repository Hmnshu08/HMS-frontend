import axios from 'axios';
import React, { useState, useEffect, Component, Components } from 'react';
import {
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

function ViewGuest() {

    const [values, setValues] = useState({
        guestCode: "",
        name: "",
        gender: "",
        email: "",
        city: "",
        email: "",
        state: "",
        country: "",
        postalCode: "",
        idType: "",
        govId: "",
        addresss: "",
        contact: "",
        phone: ""
    });
    const { id } = useParams();

    useEffect(() => {
        loadGuest();
    }, []);

    const loadGuest = async () => {
        const res = await axios.get(`http://localhost:8081/guest/${id}`);
        setValues(res.data);
    };


    return (
        <div>
            <Container>
                <div className="userbody">
                    <div className="header">
                        Guest Data
                    </div>
                    <div className="addUser">
                        <Link className="btn btn-primary mr-2" to="/guest">Back</Link>
                    </div>

                    <ul className="list-group w-50">
                        <li className="list-group-item">User unqiue ID: {values.id}</li>
                        <li className="list-group-item">User name: {values.name}</li>
                        <li className="list-group-item">Gender: {values.gender}</li>
                        <li className="list-group-item">Email: {values.email}</li>
                        <li className="list-group-item">City: {values.city}</li>
                        <li className="list-group-item">State: {values.state}</li>
                        <li className="list-group-item">Country: {values.country}</li>
                        <li className="list-group-item">Pin Code: {values.postalCode}</li>
                        <li className="list-group-item">ID Type: {values.idType}</li>
                        <li className="list-group-item">Gov ID: {values.govId}</li>
                        <li className="list-group-item">Address: {values.addresss}</li>
                        <li className="list-group-item">Contact: {values.contact}</li>
                        <li className="list-group-item">Phone: {values.phone}</li>
                    </ul>
                </div>
                
            </Container>
            <br></br><br></br>
        </div>
    )
}

export default ViewGuest

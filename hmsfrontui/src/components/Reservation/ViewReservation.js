import axios from 'axios';
import React, { useState, useEffect, Component, Components } from 'react';
import {
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';




function ViewReservation() {

    const [Rec, setReserv] = useState({

        guestCode: "",
        checkIn: "",
        checkOut: "",
        roomNumber: "",
        numberOfNights: "",
        adults: "",
        childrens: ""
    });

    const { id } = useParams();
    useEffect(() => {
        loadReserv();
    }, []);


    const loadReserv = async () => {
        const res = await axios.get(`http://localhost:8084/reservation/${id}`);
        setReserv(res.data);
    };

    return (
        <div>
            <Container>
                <div className="userbody">
                    <div className="header">
                        Reservation Data
                    </div>
                    <div className="addUser">
                        <Link className="btn btn-primary mr-2" to="/reservation">Back</Link>
                    </div>

                    <ul className="list-group w-50">
                        <li className="list-group-item">Reservation unqiue ID: {Rec.id}</li>
                        <li className="list-group-item">Guest Code: {Rec.guestCode}</li>
                        <li className="list-group-item">Check In: {Rec.checkIn}</li>
                        <li className="list-group-item">Check Out: {Rec.checkOut}</li>
                        <li className="list-group-item">Room Number: {Rec.roomNumber}</li>
                        <li className="list-group-item">Adults: {Rec.adults}</li>
                        <li className="list-group-item">Childrens: {Rec.childrens}</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default ViewReservation

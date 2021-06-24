import axios from 'axios';
import React, { useState, useEffect, Component, Components } from 'react';
import {
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';



function ViewRoom() {

    const { id } = useParams();

    const [room, setValues] = useState({
        roomNumber: "",
        name: "",
        description: "",
        block: "",
        floor: "",
        status: "",
        roomType: "",
        standardPrice: "",
        festivePrice: ""
    });

    
    useEffect(() => {
        loadRoom();
    }, []);


    const loadRoom = async () => {
        const res = await axios.get(`http://localhost:8085/room/${id}`);
        setValues(res.data);
    };

    return (
        <div>
            <Container>
                <div className="userbody">
                    <div className="header">
                        Room Data
                    </div>
                    <div className="addUser">
                        <Link className="btn btn-primary mr-2" to="/room">Back</Link>
                    </div>

                    <ul className="list-group w-50">
                        <li className="list-group-item"><b>Room unqiue ID:</b> {room.id}</li>
                        <li className="list-group-item"><b>Room Number:</b> {room.roomNumber}</li>
                        <li className="list-group-item"><b>Name:</b> {room.name}</li>
                        <li className="list-group-item"><b>Description:</b> {room.description}</li>
                        <li className="list-group-item"><b>Block:</b> {room.block}</li>
                        <li className="list-group-item"><b>Floor :</b> {room.floor}</li>
                        <li className="list-group-item"><b>Status:</b> {room.status}</li>
                        <li className="list-group-item"><b>Room Type:</b> {room.roomType}</li>
                        <li className="list-group-item"><b>Price:</b> {room.standardPrice}</li>
                        <li className="list-group-item"><b>Festive Price:</b>{room.festivePrice}</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default ViewRoom

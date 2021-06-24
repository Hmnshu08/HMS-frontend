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
import './Room.css';

function Room() {

    const [room, setRoom] = useState([]);

    useEffect(() => {
        loadRoom();
    }, []);


    const loadRoom = async () => {
        const result = await axios.get("http://localhost:8085/room");
        setRoom(result.data.reverse());
    }


    const deleteRoom = async id => {

        await
            swal({
                title: "Are you sure?",
                text: "You want to delete this Room?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })

                .then(willDelete => {
                    if (willDelete) {
                        axios.delete(`http://localhost:8085/room/${id}`)
                            // loadUsers()
                            .then(res => {
                                swal({
                                    title: "Done!",
                                    text: "Room is deleted",
                                    icon: "success",
                                    timer: 2000,
                                    button: false
                                })
                                loadRoom();
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


            <div className="userbody">
                <div className="header">
                    Room Data
                </div>
                <div className="addUser">
                    <Link className="btn btn-primary mr-2" to="/room/add">Add New Room</Link>
                </div>
                <div class="table-responsive-sm">
                    <table class="table shadow table-hover table-sm">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Room No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Block</th>
                                <th scope="col">Floor</th>
                                <th scope="col">Status</th>
                                <th scope="col">Room Type</th>
                                <th scope="col">Standard Price</th>
                                {/* <th scope="col">Festive Price</th> */}
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                room.map((rooms, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{rooms.roomNumber}</td>
                                        <td>{rooms.name}</td>
                                        <td>{rooms.description}</td>
                                        <td>{rooms.block}</td>
                                        <td>{rooms.floor}</td>
                                        <td>{rooms.status}</td>
                                        <td>{rooms.roomType}</td>
                                        <td>{rooms.standardPrice}</td>
                                        {/* <td>{rooms.festivePrice}</td> */}
                                        <td>
                                            <Link className="btn btn-primary mr-2" to={`/room/ViewRoom/${rooms.id}`}>View</Link>
                                            <Link className="btn btn-outline-info mr-2" to={`/room/EditRoom/${rooms.id}`}>Edit</Link>
                                            <Link className="btn btn-danger mr-2" onClick={() => deleteRoom(rooms.id)}>Delete</Link>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <div className="userbody2">
                <div className="row">
                    <div className="col-md-3">1</div>
                    <div className="col-md-3">2</div>
                    <div className="col-md-3">3</div>
                </div>
            </div> */}

        </div>
    )
}

export default Room

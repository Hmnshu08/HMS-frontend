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

function Reservation() {

    const [Reserv, setReserv] = useState([]);

    useEffect(() => {
        loadReserv();
    }, []);

    const loadReserv = async () => {
        const result = await axios.get("http://localhost:8084/reservation");
        setReserv(result.data.reverse());
    }


    const deleteReservation = async id => {

        await
            swal({
                title: "Are you sure?",
                text: "You want to delete this Booking?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })

                .then(willDelete => {
                    if (willDelete) {
                        axios.delete(`http://localhost:8084/reservation/${id}`)
                            // loadUsers()
                            .then(res => {
                                swal({
                                    title: "Done!",
                                    text: "Booking is deleted",
                                    icon: "success",
                                    timer: 2000,
                                    button: false
                                })
                                loadReserv();
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
                        Reservation Data
                    </div>
                    <div className="addUser">
                        <Link className="btn btn-primary mr-2" to="/reservation/add">Create a Booking</Link>
                    </div>
                    <div class="table-responsive-sm">
                        <table class="table shadow table-hover table-sm">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Guest Code</th>
                                    <th scope="col">CheckIn</th>
                                    <th scope="col">CheckOut</th>
                                    <th scope="col">Romm Number</th>
                                    {/* <th scope="col">No. of Nights</th> */}
                                    <th scope="col">Adults</th>
                                    <th scope="col">Childrens</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Reserv.map((reservs, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{reservs.guestCode}</td>
                                            <td>{reservs.checkIn}</td>
                                            <td>{reservs.checkOut}</td>
                                            <td>{reservs.roomNumber}</td>
                                            {/* <td>{reservs.numberOfNights}</td> */}
                                            <td>{reservs.adults}</td>
                                            <td>{reservs.childrens}</td>
                                            <td>
                                                <Link className="btn btn-primary mr-2" to={`/reservation/ViewReservation/${reservs.id}`}>View</Link>
                                                <Link className="btn btn-outline-info mr-2" to={`/reservation/EditReservation/${reservs.id}`}>Edit</Link>
                                                <Link className="btn btn-danger mr-2" onClick={() => deleteReservation(reservs.id)}>Delete</Link>
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

export default Reservation

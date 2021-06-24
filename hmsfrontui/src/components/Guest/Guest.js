import React, { useState, useEffect, Component, Components } from 'react';
import axios from 'axios';
import {
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import './guest.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";

function Guest() {

    let history = useHistory();
    const [guest, setGuest] = useState([]);

    useEffect(() => {
        loadGuests();
    }, []);

    const loadGuests = async () => {
        const result = await axios.get("http://localhost:8081/guest");
        setGuest(result.data.reverse());
    }



    const deleteGuest = async id => {
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
                        axios.delete(`http://localhost:8081/guest/${id}`)
                            // loadUsers()
                            .then(res => {
                                swal({
                                    title: "Done!",
                                    text: "Guest is deleted",
                                    icon: "success",
                                    timer: 2000,
                                    button: false
                                })
                                loadGuests();
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
    }




    return (
        <div>

            <div className="sideSpace">


                <div className="userbody">
                    <div className="header">
                        Guest Data
                    </div>
                    <div className="addUser">
                        <Link className="btn btn-primary mr-2" to="/guest/add">Add New Guest</Link>
                    </div>
                    <div class="table-responsive-sm">
                        <table class="table shadow table-hover table-sm">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Guest Code</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Postal Code</th>
                                    <th scope="col">ID Type</th>
                                    <th scope="col">Gov ID </th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    guest.map((guests, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{guests.guestCode}</td>
                                            <td>{guests.name}</td>
                                            <td>{guests.gender}</td>
                                            <td>{guests.email}</td>
                                            <td>{guests.city}</td>
                                            <td>{guests.state}</td>
                                            <td>{guests.country}</td>
                                            <td>{guests.postalCode}</td>
                                            <td>{guests.idType}</td>
                                            <td>{guests.govId}</td>
                                            <td>{guests.addresss}</td>
                                            <td>{guests.contact}</td>
                                            <td>{guests.phone}</td>
                                            <td>
                                                <Link className="btn btn-primary mr-2" to={`/guest/ViewGuest/${guests.id}`}>View</Link>
                                                <Link className="btn btn-outline-info mr-2" to={`/guest/EditGuest/${guests.id}`}>Edit</Link>
                                                <Link className="btn btn-danger mr-2" onClick={() => deleteGuest(guests.id)}>Delete</Link>
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guest

import React, { useState, useEffect, Component, useLayoutEffect } from 'react'
import { Link, useHistory, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditReservation() {

    let history = useHistory();
    const { id } = useParams();


    const [Res, setReserv] = useState({

        guestCode: "",
        checkIn: "",
        checkOut: "",
        roomNumber: "",
        numberOfNights: "",
        adults: "",
        childrens: ""
    });

    const { guestCode, checkIn, checkOut, roomNumber, numberOfNights, adults, childrens } = Res;

    const onInputChange = e => {
        setReserv({ ...Res, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadReserv();
    }, []);


    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8084/reservation/${id}`, Res)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "Staff is updated into database",
                    icon: "success",
                    timer: 3000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                history.push("/reservation");
                // document.location = "/user";


            })
            .catch(err => {
                console.log(err)
                swal(
                    "Error!", err.message,
                    "error"
                )
            });
    };


    const loadReserv = async () => {
        const result = await axios.get(`http://localhost:8084/reservation/${id}`);
        setReserv(result.data);
    };


    //search for rooms

    const [room, setRoom] = useState([]);

    useEffect(() => {
        loadRoom();
    }, []);

    const loadRoom = async () => {
        const result = await axios.get("http://localhost:8091/search");
        setRoom(result.data.reverse());
    }

    //search for guest

    const [guest, setGuest] = useState([]);

    useEffect(() => {
        loadGuest();
    }, []);

    const loadGuest = async () => {
        const result = await axios.get("http://localhost:8081/guest");
        setGuest(result.data.reverse());
    }


    return (
        <div>
            <div className="addUser container">
                <Link className="btn btn-danger mr-2" to="/reservation/">Cancel</Link>
            </div>
            <div className="header">Update Booking</div>
            {/* <div className="roomsearch">
                <div class="table-responsive-sm">
                    <table class="table shadow table-hover table-sm">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Rooms Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                room.map((rooms) => (
                                    <tr>
                                        <td>{rooms.roomNumber}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div> */}
            <div className="userbody">

                <form className="container col-6" onSubmit={e => onSubmit(e)}>
                    <div className="form-row">
                        {/* <div className="form-group col-md-6">
                            <label for="inputEmail4">Guest Code</label>
                            <input type="number" class="form-control" name="guestCode" value={values.guestCode} onChange={handleChange('guestCode')} required />
                        </div> */}
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Guest Code</label>
                            <select id="inputState" className="form-control" name="guestCode" value={guestCode} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                {
                                    guest.map((guests) => (

                                        <option value={`${guests.guestCode}`}>{guests.guestCode}</option>
                                        // <tr>
                                        //     <td>{rooms.roomNumber}</td>
                                        // </tr>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Check In</label>
                            <input type="date" class="form-control" id="datetimepicker" name="checkIn" value={checkIn} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Check Out</label>
                            <input type="date" class="form-control" id="datetimepicker" name="checkOut" value={checkOut} onChange={e => onInputChange(e)} required />
                        </div>


                        {/* <div className="form-group col-md-6">
                            <label for="inputEmail4">Room Number</label>
                            <input type="number" class="form-control" name="roomNumber" value={values.roomNumber} onChange={handleChange('roomNumber')} required />
                        </div> */}

                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Room Number</label>
                            <select id="inputState" className="form-control" name="roomNumber" value={roomNumber} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                {
                                    room.map((rooms) => (

                                        <option value={`${rooms.roomNumber}`}>{rooms.roomNumber}</option>
                                        // <tr>
                                        //     <td>{rooms.roomNumber}</td>
                                        // </tr>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Adults</label>
                            <input type="text" class="form-control" name="adults" value={adults} onChange={e => onInputChange(e)} required />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Childrens</label>
                            <input type="text" class="form-control" name="childrens" value={childrens} onChange={e => onInputChange(e)} required />
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default EditReservation

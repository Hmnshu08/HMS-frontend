import React, { useState, useEffect } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import './reservation.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddReservation() {

    let history = useHistory();


    const [values, setValues] = useState({
        guestCode: "",
        checkIn: "",
        checkOut: "",
        roomNumber: "",
        numberOfNights: "",
        adults: "",
        childrens: ""
    });

    // const [startDate, setStartDate] = useState(new Date("2021/06/06"));
    // const [endDate, setEndDate] = useState(new Date("2021/07/10"));

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { guestCode, checkIn, checkOut, roomNumber, numberOfNights, adults, childrens } = values;
        const reserv = { guestCode, checkIn, checkOut, roomNumber, numberOfNights, adults, childrens };



        await axios.post('http://localhost:8084/reservation', reserv)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "New Booking is added to database",
                    icon: "success",
                    timer: 2000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                // this.props.history.push("/user");
                history.push("/reservation");
                // document.location="/user";


            })
            .catch(err => {
                console.log(err)
                swal(
                    "Error!", err.message,
                    "error"
                )
            });
    };
    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value });
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
                <Link className="btn btn-primary mr-2" to="/reservation/">Back</Link>
            </div>
            <div className="header">New Booking</div>
            <div className="roomsearch">
                <div class="table-responsive-sm">
                    <table class="table shadow table-hover table-sm">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Rooms Available</th>
                                <th scope="col">Room Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                room.map((rooms) => (
                                    <tr>
                                        <td>{rooms.roomNumber}</td>
                                        <td>{rooms.standardPrice} ₹</td>
                                    </tr>
                                    
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="userbody">

                <form className="container col-6" onSubmit={handleSubmit}>
                    <div className="form-row">
                        {/* <div className="form-group col-md-6">
                            <label for="inputEmail4">Guest Code</label>
                            <input type="number" class="form-control" name="guestCode" value={values.guestCode} onChange={handleChange('guestCode')} required />
                        </div> */}
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Guest Code</label>
                            <select id="inputState" className="form-control" name="guestCode" value={values.guestCode} onChange={handleChange('guestCode')} required >
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
                            <input type="date" class="form-control" id="datetimepicker" name="checkIn" value={values.checkIn} onChange={handleChange('checkIn')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Check Out</label>
                            <input type="date" class="form-control" id="datetimepicker" name="checkOut" value={values.checkOut} onChange={handleChange('checkOut')} required />
                        </div>


                        {/* <div className="form-group col-md-6">
                            <label for="inputEmail4">Room Number</label>
                            <input type="number" class="form-control" name="roomNumber" value={values.roomNumber} onChange={handleChange('roomNumber')} required />
                        </div> */}

                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Room Number</label>
                            <select id="inputState" className="form-control" name="roomNumber" value={values.roomNumber} onChange={handleChange('roomNumber')} required >
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
                            <input type="text" class="form-control" name="adults" value={values.adults} onChange={handleChange('adults')} required />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Childrens</label>
                            <input type="text" class="form-control" name="childrens" value={values.childrens} onChange={handleChange('childrens')} required />
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>








        </div>
    )
}

export default AddReservation

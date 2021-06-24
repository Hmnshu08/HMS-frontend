import React, { useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function AddRoom() {

    let history = useHistory();

    const [values, setValues] = useState({
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


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { roomNumber, name, description, block, floor, status, roomType, standardPrice, festivePrice } = values;
        const room = { roomNumber, name, description, block, floor, status, roomType, standardPrice, festivePrice };

        await axios.post('http://localhost:8085/room', room)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "Room is added to database",
                    icon: "success",
                    timer: 2000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                // this.props.history.push("/user");
                history.push("/room");
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

    return (
        <div>
            <div className="addUser container">
                <Link className="btn btn-primary mr-2" to="/room">Back</Link>
            </div>
            <div className="header">Add New Room</div>

            <div className="userbody">
                <form className="container col-6" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Room Number</label>
                            <input type="number" class="form-control" name="roomNumber" value={values.roomNumber} onChange={handleChange('roomNumber')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Name</label>
                            <input type="text" class="form-control" name="name" value={values.name} onChange={handleChange('name')} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Block</label>
                            <select id="inputState" className="form-control" name="block" value={values.block} onChange={handleChange('block')} required >
                                <option >Select One</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>

                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Floor</label>
                            <select id="inputState" className="form-control" name="floor" value={values.floor} onChange={handleChange('floor')} required >
                                <option >Select One</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>

                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Status</label>
                            <select id="inputState" className="form-control" name="status" value={values.status} onChange={handleChange('status')} required >
                                <option >Select One</option>
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>

                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Room Type</label>
                            <select id="inputState" className="form-control" name="roomType" value={values.roomType} onChange={handleChange('roomType')} required >
                                <option >Select One</option>
                                <option value="Standard">Standard</option>
                                <option value="Silver">Silver</option>
                                <option value="Gold">Gold</option>
                            </select>

                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Price</label>
                            <input type="number" class="form-control" name="standardPrice" value={values.standardPrice} onChange={handleChange('standardPrice')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Festive Price</label>
                            <input type="number" class="form-control" name="festivePrice" value={values.festivePrice} onChange={handleChange('festivePrice')} required />
                        </div>
                    </div>
                    <div className="form-row mb-3 ">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea  class="form-control" rows="3" class="form-control" name="description" value={values.description} onChange={handleChange('description')} required ></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddRoom

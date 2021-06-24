import React, { useState, useEffect, Component, useLayoutEffect } from 'react'
import { Link, useHistory, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditRoom() {
    let history = useHistory();
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


    const { roomNumber, name, description, block, floor, status, roomType, standardPrice, festivePrice } = room;
    const onInputChange = e => {
        setValues({ ...room, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadRoom();
    }, []);


    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8085/room/${id}`, room)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "Room is updated into database",
                    icon: "success",
                    timer: 3000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                history.push("/room");
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

    const loadRoom = async () => {
        const result = await axios.get(`http://localhost:8085/room/${id}`);
        setValues(result.data);
    };

    return (
        <div>
            <div className="addUser container">
                <Link className="btn btn-danger mr-2" to="/room">Cancel</Link>
            </div>
            <div className="header">Add New Room</div>

            <div className="userbody">
                <form className="container col-6" onSubmit={e => onSubmit(e)}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Room Number</label>
                            <input type="number" class="form-control" name="roomNumber" value={roomNumber} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Name</label>
                            <input type="text" class="form-control" name="name" value={name}onChange={e => onInputChange(e)} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Block</label>
                            <select id="inputState" className="form-control" name="block" value={block} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>

                        </div>

                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Floor</label>
                            <select id="inputState" className="form-control" name="floor" value={floor} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>

                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Status</label>
                            <select id="inputState" className="form-control" name="status" value={status} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>

                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Room Type</label>
                            <select id="inputState" className="form-control" name="roomType" value={roomType} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                <option value="Standard">Standard</option>
                                <option value="Silver">Silver</option>
                                <option value="Gold">Gold</option>
                            </select>

                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Price</label>
                            <input type="number" class="form-control" name="standardPrice" value={standardPrice} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Festive Price</label>
                            <input type="number" class="form-control" name="festivePrice" value={festivePrice} onChange={e => onInputChange(e)} required />
                        </div>
                    </div>
                    <div className="form-row mb-3 ">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" rows="3" class="form-control" name="description" value={description} onChange={e => onInputChange(e)} required ></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditRoom

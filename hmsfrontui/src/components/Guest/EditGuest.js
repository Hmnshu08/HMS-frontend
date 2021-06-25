import React, { useState, useEffect, Component, useLayoutEffect } from 'react';
import { Link, useHistory, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditGuest() {

    let history = useHistory();
    const { id } = useParams();
    const [values, setValues] = useState({
        guestCode: "",
        name: "",
        gender: "",
        email: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        idType: "",
        govId: "",
        addresss: "",
        contact: "",
        phone: ""
    });

    const { guestCode, name, gender, email, city, state, country, postalCode, idType, govId, addresss, contact, phone } = values;

    const onInputChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadGuest();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8081/guest/${id}`, values)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "Guest is updated into database",
                    icon: "success",
                    timer: 3000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                history.push("/guest");
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

    const loadGuest = async () => {
        const result = await axios.get(`http://localhost:8081/guest/${id}`);
        setValues(result.data);
    };


    return (
        <div>
            <div className="addUser container">
                <Link className="btn btn-danger mr-2" to="/guest/">Cancel</Link>
            </div>
            <div className="header">Add New Guest</div>

            <div className="userbody">
                <form className="container col-6" onSubmit={e => onSubmit(e)}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Guest Code:</label>
                            <input type="text" class="form-control" name="username" value={guestCode} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Name:</label>
                            <input type="text" class="form-control" name="name" value={name} onChange={e => onInputChange(e)} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Gender</label>
                            <select id="inputState" className="form-control" name="gender" value={gender} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>

                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Email:</label>
                            <input type="email" class="form-control" name="email" value={email} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">City:</label>
                            <input type="text" class="form-control" name="city" value={city} onChange={e => onInputChange(e)}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">State:</label>
                            <input type="text" class="form-control" name="state" value={state} onChange={e => onInputChange(e)}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Country:</label>
                            <input type="text" class="form-control" name="country" value={country} onChange={e => onInputChange(e)}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Postal Code:</label>
                            <input type="number" class="form-control" name="postalCode" maxLength = {6} value={postalCode} onChange={e => onInputChange(e)} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose ID Type</label>
                            <select id="inputState" className="form-control" name="idType" value={idType} onChange={e => onInputChange(e)} required >
                                <option >Select One</option>
                                <option value="Voter">Voter</option>
                                <option value="Pan">Pan</option>
                                <option value="License">License</option>

                            </select>

                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Gov ID:</label>
                            <input type="text" class="form-control" name="govId" maxLength = "10" value={govId} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Address:</label>
                            <input type="text" class="form-control" name="addresss" value={addresss} onChange={e => onInputChange(e)}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Contact:</label>
                            <input type="text" class="form-control" name="contact" maxLength = "10" value={contact} onChange={e => onInputChange(e)} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Phone:</label>
                            <input type="text" class="form-control" name="phone" maxLength = "8" value={phone} onChange={e => onInputChange(e)}  />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default EditGuest

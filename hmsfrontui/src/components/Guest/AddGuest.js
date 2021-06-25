import React, { useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';




function AddGuest() {
    let history = useHistory();

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

    // const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { guestCode, name, gender, email, city, state, country, postalCode, idType, govId, addresss, contact, phone } = values;
        const guest = { guestCode, name, gender, email, city, state, country, postalCode, idType, govId, addresss, contact, phone };

        await axios.post('http://localhost:8081/guest', guest)
            .then(res => {
                swal({
                    title: "Done!",
                    text: "Guest is added to database",
                    icon: "success",
                    timer: 2000,
                    button: false
                })
                // this.setState({ redirect: "/user" });
                // this.props.history.push("/user");
                history.push("/guest");
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
                <Link className="btn btn-primary mr-2" to="/guest">Back</Link>
            </div>
            <div className="header">Add New Guest</div>

            <div className="userbody">
                <form className="container col-6" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Guest Code:</label>
                            <input type="text" class="form-control" name="username" value={values.guestCode} onChange={handleChange('guestCode')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Name:</label>
                            <input type="text" class="form-control" name="name" value={values.name} onChange={handleChange('name')} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose Gender</label>
                            <select id="inputState" className="form-control" name="gender" value={values.gender} onChange={handleChange('gender')} required >
                                <option >Select One</option>
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>

                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Email:</label>
                            <input type="email" class="form-control" name="email" value={values.email} onChange={handleChange('email')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">City:</label>
                            <input type="text" class="form-control" name="city" value={values.city} onChange={handleChange('city')}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">State:</label>
                            <input type="text" class="form-control" name="state" value={values.state} onChange={handleChange('state')}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Country:</label>
                            <input type="text" class="form-control" disabled name="country" value={values.country} onChange={handleChange('country')}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Postal Code:</label>
                            <input type="number" class="form-control" name="postalCode" maxLength = {6} value={values.postalCode} onChange={handleChange('postalCode')} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Choose ID Type</label>
                            <select id="inputState" className="form-control" name="idType" value={values.idType} onChange={handleChange('idType')} required >
                                <option >Select One</option>
                                <option value="Voter">Voter</option>
                                <option value="Pan">Pan</option>
                                <option value="License">License</option>

                            </select>

                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Gov ID:</label>
                            <input type="text" class="form-control" name="govId" maxLength = "10" value={values.govId} onChange={handleChange('govId')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Address:</label>
                            <input type="text" class="form-control"  autocomplete="off" name="addresss" value={values.addresss} onChange={handleChange('addresss')}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Contact:</label>
                            <input type="text" class="form-control" name="contact" maxLength = "10" value={values.contact} onChange={handleChange('contact')} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Phone:</label>
                            <input type="text" class="form-control" name="phone" maxLength = "8" value={values.phone} onChange={handleChange('phone')}  />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br></br>
                <br></br>
            </div>


        </div >

    )


}
export default AddGuest

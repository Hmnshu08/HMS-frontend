import React from 'react'
import {
    Container
} from 'reactstrap';
import './login.css'
export default function Login() {
    return (
        <div>
            <form className="form-signin" >
                <div class="mb-4"alt="">
                    
                </div>
                <h1 className="h3 mb-3 font-weight-normal">Please Login</h1>
                <label for="inputEmail" class="sr-only">Username:</label>
                <input type="text" id="inputEmail" className="form-control mb-4 " placeholder="Username" required autofocus="" />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control mb-4" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </form>
            {/* <Container>
                <div className="head">
                    This is Auth
                </div>
            </Container> */}
        </div>
    )
}


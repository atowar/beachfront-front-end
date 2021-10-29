import './Signin.css'
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Signin = () => {
    const { user, googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className=" md:my-5 grid justify-items-center">
            <div className="login w-full md:w-3/5 lg:w-3/5 text-white p-5 rounded-md">
                <div>
                    <h2 className="text-xl md:mb-5">Sign-In</h2>
                    <div>
                        <input className="p-2 rounded-md" type="email" name="" id="" placeholder="Type your best email here" /> <br />
                        <input className="my-5 text-black p-2" type="password" name="" id="" /><br />
                        <input className="text-lg rounded-md mb-2 text-black px-5 px-2"type="submit" value="submit" />
                    </div>
                    <p >New user? <Link to="/signup">Sign-Up</Link></p>
                </div>
                <div><button className="text-lg rounded-md mb-2 text-black px-5 px-2 bg-white" onClick={handleGoogleSignIn}
                >Google Sign-In
                </button>
                </div>
            </div>
        </div>
    );
};

export default Signin;
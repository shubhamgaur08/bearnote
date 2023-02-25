import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://bearnote-backend.vercel.app/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history("/");
            props.showAlert("Logged in successfully","success")

        }
        else{
            props.showAlert("Invalid Credentials","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

               
                <div className="d-flex justify-content-left">
                <Button  type="submit" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Submit</Button>
            </div>
            </form>
        </div>
    )
}

export default Login

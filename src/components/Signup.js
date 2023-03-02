import React, {useState } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})

    const onChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        let host = "https://bearnote-backend.vercel.app";
        e.preventDefault();
        const responce = await fetch(`${host}/api/auth/createuser`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name: credentials.name,email: credentials.email,password: credentials.password}),
        })

        const json = await responce.json();
        console.log(json)
        if(json.success){
            // redirect
            localStorage.setItem('token',json.authtoken);
            console.log(localStorage.getItem('token'))
            navigate("/")
            props.showAlert("Account Created successfully","success")
        }else{
            props.showAlert("Invalid Credentials","danger")
        }
    }
    return (
//             
<div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" onClick={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c"  value={credentials.name} onChange={onChange} name="name" className="form-control" required minLength={5}/>
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c"  value={credentials.email} onChange={onChange} name="email" className="form-control" />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c"  value={credentials.password} name="password" onChange={onChange} className="form-control" required minLength={5} />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                          <input type="cpassword" value={credentials.cpassword} onChange={onChange} className="form-control" id="cpassword" name="cpassword" required minLength={5}/>
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center h-50 mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn   gradient-custom-2 btn-lg">SignUp</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div >
      </div>
    </div>
  </div>
    )
}

export default Signup

// import React ,{useState,useEffect}from 'react'
// import { Link } from 'react-router-dom'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import {loginConfig} from '../../redux/LoginSlice'
// import { useDispatch } from 'react-redux'

// const Login = () => {

//    const dispatch = useDispatch()
//    const[userName,setUserName] = useState('');
//    const[passWord,setPassWord] = useState('');

//   const handleUserName = (e) => {
//     setUserName(e.target.value)

//   }
//   const handlePassword = (e) => {
//     setPassWord(e.target.value)

//   }

//   const loginSubmit = (e) => {
//     // e.preventDefault();
//     if (userName && passWord) {
//       const loginUser = {userName,passWord}
//       dispatch(loginConfig(loginUser))

//     }
//     else {
//       alert('Please enter Username and Password')
//     }
//   }
//   useEffect(() => {

// }, []);

//   return (
//     <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={8}>
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-medium-emphasis">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <CIcon icon={cilUser} />
//                       </CInputGroupText>
//                       <CFormInput placeholder="Username" onChange={handleUserName} autoComplete="username" />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <CIcon icon={cilLockLocked} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         placeholder="Password"
//                         onChange={handlePassword}
//                         autoComplete="current-password"
//                       />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs={6}>
//                         <CButton color="primary" type="submit" onClick={loginSubmit} className="px-4">
//                           Login
//                         </CButton>
//                       </CCol>
//                       <CCol xs={6} className="text-right">
//                         <CButton color="link" className="px-0">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p>
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//                       tempor incididunt ut labore et dolore magna aliqua.
//                     </p>
//                     <Link to="/register">
//                       <CButton color="primary" className="mt-3" active tabIndex={-1}>
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Login

//

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login({ handleClose }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const token = "1234";
  const sigIn = () => {
    if (loginData.email === "admin@123" && loginData.password === "admin@123") {
      handleClose();
      localStorage.setItem("token", token);
      window.location.reload();
    }
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;

    setLoginData({ ...loginData, [name]: value });
  };
  return (
    <>
      <form>
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="login-box-msg">Login In</h2>
                  <p className="text-white-50 mb-3">
                    Please enter your login and password!
                  </p>

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    value={loginData.email}
                    id="formControlLg"
                    type="email"
                    size="lg"
                    name="email"
                    placeholder="Email"
                    onChange={changeHandler}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    value={loginData.password}
                    name="password"
                    onChange={changeHandler}
                    id="formControlLg"
                    type="password"
                    size="lg"
                    placeholder="Password"
                    required
                  />

                  {/* <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-4"
                label="Remember Me"
              /> */}

                  {/* <MDBBtn size="lg" className="btn btn-primary btn-block">
                Login
              </MDBBtn> */}
                  {/* <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div> */}
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label for="remember">Remember Me</label>
                      </div>
                    </div>

                    <div class="col-4">
                      <button
                        onClick={() => sigIn()}
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>

                  {/* <hr className="my-4" /> */}
                  <div className="social-auth-links text-center mb-3">
                    <p>- OR -</p>

                    <MDBBtn
                      className="mb-2 w-100"
                      size="lg"
                      style={{ backgroundColor: "#dd4b39" }}
                    >
                      <MDBIcon fab icon="google" className="mx-2" />
                      Sign in with google
                    </MDBBtn>

                    <MDBBtn
                      className="mb-4 w-100"
                      size="lg"
                      style={{ backgroundColor: "#3b5998" }}
                    >
                      <MDBIcon fab icon="facebook-f" className="mx-2" />
                      Sign in with facebook
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </>
  );
}

export default Login;

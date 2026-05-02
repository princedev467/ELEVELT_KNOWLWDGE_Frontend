import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRegister, forgetPassword, resetPassword, userCheck, userLogin, userVerify } from '../../Redux/slice/auth.slice';
import { useNavigate, useParams } from 'react-router-dom';
import { boolean, object, string } from 'yup';
import { useFormik } from 'formik';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Auth(props) {

  const [type, setType] = useState('login');
  const [otptype, setOtpType] = useState('signup')
  
 const {Instructor}= useParams()
//  console.log(Instructor);
 
  const navigate = useNavigate()

  const dispatch=useDispatch()

  useEffect(() => {

    dispatch(userCheck())

  }, [])

  let intialval = {}, authSchema = {}

  const auth = useSelector(state => state.auth)
  console.log(auth);


  // const { enqueueSnackbar }= useSnackbar();

  if (type === 'signup') {

    intialval = {
      name: '',
      email: '',
      password: '',
      cpassword: '',
      terms: false
    }



    authSchema = {
      name: string().required(),
      email: string().email().required(),
      password: string().required(),
      cpassword: string().required(),
      terms: boolean().required().oneOf([true], 'please select terms & Condition')
    }

  } else if (type === 'verifyUser') {

    intialval = {
      OTP: ''
    }

    authSchema = {
      OTP: string().required()
    }
  } else if (type === 'login') {

    intialval = {
      email: '',
      password: '',
      terms: false
    }

    authSchema = {
      email: string().email().required(),
      password: string().required(),
      terms: boolean().required().oneOf([true], 'please select terms & Condition')

    }
  } else if (type === 'forgotPassword') {
    intialval = {
      email: '',

    }

    authSchema = {
      email: string().email().required(),

    }
  } else if (type === 'resetPassword') {
    intialval = {
      password: '',
      cpassword: ''
    }

    authSchema = {
      password: string().required(),
      cpassword: string().required()
    }
  }



  const formik = useFormik({
    initialValues: intialval,
    validationSchema: object(authSchema),
    enableReinitialize: true,
    onSubmit: async values => {
      console.log(values);
      if (type === 'signup') {
        const res = await dispatch(addRegister({...values,role:Instructor?Instructor:'user'}));

        localStorage.setItem('email', values.email)
        Instructor?localStorage.setItem('role', 'Instructor'):localStorage.setItem('role', 'user')
        if (res.type === 'auth/addRegister/fulfilled') {
          setType('verify OTP')


        }

      } else if (type === 'forgotPassword') {
        const res = await dispatch(forgetPassword(values));

        localStorage.setItem('email', values.email);

        if (res.type === 'auth/forgetPassword/fulfilled') {
          setType('verify OTP')
          setOtpType('forgotPassword');

        }
      } else if (type === 'verify OTP') {
        const res = await dispatch(userVerify({ email: localStorage.getItem("email"), OTP: values.OTP }))

        console.log(res);



        if (res.type === 'auth/userVerify/fulfilled') {
          if (otptype === 'forgotPassword') {
            setType('resetPassword')
          } else {
            setType('login')
          }


        }

      } else if (type === 'resetPassword') {
        const res = await dispatch(resetPassword({ email: localStorage.getItem("email"), password: values.password }))

        if (res.type === 'auth/resetPassword/fulfilled') {
          setType('login')

        }
      } else if (type === 'login') {
        const res = await dispatch(userLogin(values));

          //login type Instructor
        if (res.type === 'auth/userLogin/fulfilled' && res.payload.role==='Instructor') {


          navigate('/Instructor_Dashboard');



            //login type user
        }else  if (res.type === 'auth/userLogin/fulfilled' && res.payload.role==='user') {

          navigate('/');
        }
        console.log(res);

      }


    }
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik

  // console.log(errors);

  const handleGoogle = () => {
    try {
      window.location.href = 'http://localhost:2022/api/v1/user/auth/google'

    } catch (error) {
      console.log(error);

    }
  }

  const handleFacebook= ()=>{
    try {
      window.location.href='http://localhost:2022/api/v1/user/auth/facebook'
    } catch (error) {
        console.log(error);
    }
  }
  {
    if (auth.isLoading) {
      return <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>

    }
  }

  return (
    <main>
      <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            {/* left */}
            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div className="p-3 p-lg-5">
                {/* Title */}
                <div className="text-center">
                  <h2 className="fw-bold">Welcome to our largest community</h2>
                  <p className="mb-0 h6 fw-light">Let's learn something new today!</p>
                </div>
                {/* SVG Image */}
                <img src="/assets/images/element/02.svg" className="mt-5" alt />
                {/* Info */}
                <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                  <ul className="avatar-group mb-2 mb-sm-0">
                    <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src="/assets/images/avatar/01.jpg" alt="avatar" /></li>
                    <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src="/assets/images/avatar/02.jpg" alt="avatar" /></li>
                    <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src="/assets/images/avatar/03.jpg" alt="avatar" /></li>
                    <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src="/assets/images/avatar/04.jpg" alt="avatar" /></li>
                  </ul>
                  {/* Content */}
                  <p className="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-12 col-lg-6 m-auto">
              <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                  {/* Title */}
                  <img src="/assets/images/element/03.svg" className="h-40px mb-2" alt />
                  <h2>
                    {
                      Instructor?'Instructor Acoount':`${type} for your account!`
                    }
                 </h2>
                  <p className="lead mb-4">Nice to see you! Please {type} with your account.</p>
                  {/* Form START */}

                  <form onSubmit={handleSubmit}>
                    {
                      type === 'signup' || type === 'login' || type === 'forgotPassword' || type === 'resetPassword' ?
                        <>
                          {

                            type === 'signup' &&
                            <div className="mb-4">
                              <label htmlFor="exampleInputEmail1" className="form-label">Name *</label>
                              <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill" /></span>
                                <input type="text"
                                  name='name'
                                  className="form-control border-0 bg-light rounded-end ps-1"
                                  placeholder="Name"
                                  id="exampleInputEmail1"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.name}
                                />

                              </div>
                              {
                                errors.name && touched.name ? <span style={{ color: 'red' }}> {errors.name}</span> : ''
                              }
                            </div>
                          }



                          {/* Email */}
                          {
                            (type === 'signup' || type === 'login' || type === 'forgotPassword') &&
                            <div className="mb-4">
                              <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                              <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill" /></span>
                                <input
                                  type="email"
                                  name='email'
                                  className="form-control border-0 bg-light rounded-end ps-1"
                                  placeholder="E-mail"
                                  id="exampleInputEmail1"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.email}
                                />

                              </div>
                              {
                                errors.email && touched.email ? <span style={{ color: 'red' }}>{errors.email}</span> : ''
                              }
                            </div>
                          }
                          {/* Password */}

                          {
                            (type === 'signup' || type === 'resetPassword' || type === 'login') &&
                            <div className="mb-4">
                              <label htmlFor="inputPassword5" className="form-label">Password *</label>
                              <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock" /></span>
                                <input type="password"
                                  name='password'
                                  className="form-control border-0 bg-light rounded-end ps-1"
                                  placeholder="*********"
                                  id="inputPassword5"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.password}
                                />

                              </div>
                              {
                                errors.password && touched.password ? <span style={{ color: 'red' }}> {errors.password}</span> : ''
                              }
                            </div>
                          }
                          {/* Confirm Password */}
                          {
                            (type === 'resetPassword' || type === 'signup') &&
                            <div className="mb-4">
                              <label htmlFor="inputPassword6" className="form-label">Confirm Password *</label>
                              <div className="input-group input-group-lg">
                                <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock" /></span>
                                <input type="password"
                                  name='cpassword'
                                  className="form-control border-0 bg-light rounded-end ps-1"
                                  placeholder="*********" id="inputPassword6"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.cpassword}
                                />
                                <br />

                              </div>
                              {
                                errors.cpassword && touched.cpassword ? <span style={{ color: 'red' }}> {errors.cpassword}</span> : ''
                              }
                            </div>
                          }


                          {/* Check box */}
                          {
                            (type === 'signup' || type === 'login') &&
                            <div className="mb-4">
                              <div className="form-check">
                                <input type="checkbox"
                                  name='terms'
                                  className="form-check-input"
                                  id="checkbox-1"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  checked={values.terms}
                                />
                                <label className="form-check-label" htmlFor="checkbox-1">By {type}, you agree to the<a href="#"> terms of service</a></label>


                              </div>
                              {
                                errors.terms && touched.terms ? <span style={{ color: 'red' }}>{errors.terms}</span> : ''
                              }
                            </div>
                          }
                        </> :
                        <>
                          {/* OTP */}
                          <div className="mb-4">
                            <label htmlFor="exampleInputOtp1" className="form-label">OTP *</label>
                            <div className="input-group input-group-lg">
                              <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock" /></span>
                              <input
                                type="text"
                                name='OTP'
                                className="form-control border-0 bg-light rounded-end ps-1"
                                placeholder="OTP"
                                id="exampleInputotp"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.OTP}
                              />
                            </div>
                            {
                              errors.OTP && touched.OTP ? <span style={{ color: 'red' }} >{errors.OTP}</span> : ''
                            }
                          </div>

                        </>
                    }


                    {/* Button */}
                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        <button className="btn btn-primary mb-0" type="submit">{type}</button>
                      </div>
                    </div>
                    <br />
                    {
                      type === 'login' && (
                        <div className="text-end mb-3">
                          <a href="#" onClick={() => setType('forgotPassword')}>
                            Forgot Password?
                          </a>
                        </div>
                      )
                    }
                  </form>
                  {/* Form END */}
                  {/* Social buttons */}
                  <div className="row">
                    {/* Divider with text */}
                    <div className="position-relative my-4">
                      <hr />
                      <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
                    </div>
                    {/* Social btn */}
                    <div className="col-xxl-6 d-grid">
                      <a href="#" onClick={handleGoogle} className="btn bg-google mb-2 mb-xxl-0"><i className="fab fa-fw fa-google text-white me-2" />Signup with Google</a>
                    </div>
                    {/* Social btn */}
                    <div className="col-xxl-6 d-grid">
                      <a href="#" onClick={handleFacebook}className="btn bg-facebook mb-0"><i className="fab fa-fw fa-facebook-f me-2" />Signup with Facebook</a>
                    </div>
                  </div>
                  {/* Sign up link */}
                  {
                    type === 'signup' ?
                      <div className="mt-4 text-center">
                        <span>Already have an account?<a href='#' onClick={() => setType('login')}> Sign in </a></span>
                      </div> :
                      <div className="mt-4 text-center">
                        <span>Create A New Account<a href='#' onClick={() => setType('signup')}> Sign up </a></span>
                      </div>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </main >
  );
}

export default Auth;
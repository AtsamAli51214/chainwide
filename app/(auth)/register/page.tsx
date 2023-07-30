"use client";
import PropTypes from "prop-types";
import React from "react";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";

//redux
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import ImageData  from "../../../public/images/profile-img.png"
import rounded  from "../../../public/images/rounded.svg"
const imageUrl: string = ImageData.src;
const roundedImg: string = rounded.src;
// actions
// import { loginUser, socialLogin } from "../../store/actions";



const Register = () => {

  //meta title
  // document.title = "Login | Skote - React Admin & Dashboard Template";

  // const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this  flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: "johndoe" || '',
      email: "admin@themesbrand.com" || '',
      password: "123456" || '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your Name"),
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      // dispatch(loginUser(values, props.router.navigate));
    }
  });

  // const { error } = useSelector(state => ({
  //   error: state.Login.error,
  // }));

  //   const signIn = type => {
  //       // dispatch(socialLogin(type, props.router.navigate));
  //   };

  //for facebook and google authentication
  // const socialResponse = type => {
  //   signIn(type);
  // };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft" >
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={imageUrl} alt="" className="img-fluid p-3" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                  <Link href="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={roundedImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>

                    {/* <Link href="/" className="logo-light-element">
                      <div className="avatar-md profile-user-wid mb-4" style={{backgroundColor:'lightgray',borderRadius:'50%',width:'50px'}}>
                        <span className="avatar-title rounded-circle">
                        <img
                            src={roundedImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                            style={{height:'50px',backgroundColor:'light'}}
                          />
                        </span>
                      </div>
                    </Link> */}
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      {/* {error ? <Alert color="danger">{error}</Alert> : null} */}

                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Username</Label>
                        <Input
                          name="username"
                          type="text"
                          placeholder="Enter username"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.username || ""}
                          invalid={
                            validation.touched.username && validation.errors.username ? true : false
                          }
                        />
                        {validation.touched.username && validation.errors.username ? (
                          <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                            <Link
                              href="/login"
                              className="text-white"
                              // onClick={e => {
                              //   e.preventDefault();
                              //   socialResponse("facebook");
                              // }}
                            >
                                 Register
                            </Link>
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5>

                        <ul className="list-inline" style={{justifyContent:'space-around!important'}}>
                          <li className="list-inline-item" >
                          <Link
                              href="#"
                              className="social-list-item bg-primary text-white border-primary"
                              // onClick={e => {
                              //   e.preventDefault();
                              //   socialResponse("facebook");
                              // }}
                            >
                              <i className="bi bi-facebook"></i>
                            </Link>
                          </li>
                          
                          <li className="list-inline-item">
                          <Link
                              href="#"
                              className="social-list-item bg-danger text-white border-danger"
                              // onClick={e => {
                              //   e.preventDefault();
                              //   socialResponse("twitter");
                              // }}
                            >
                              <i className="bi bi-twitter" />
                            </Link>
                          </li>
                     
                          <li className="list-inline-item">
                          <Link
                              href="#"
                              className="social-list-item bg-danger text-white border-danger"
                              // onClick={e => {
                              //   e.preventDefault();
                              //   socialResponse("google");
                              // }}
                            >
                              <i className="bi bi-google" />
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 text-center">
                        <Link href="/forgot-password" className="text-muted">
                          <i className="bi bi-lock me-1" />
                          Forgot your password?
                        </Link>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          By registering you agree to the Skote{" "}
                          <Link href="#" className="text-primary">
                            Terms of Use
                          </Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link href="/register" className="fw-medium text-primary">
                    {" "}
                    login{" "}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;

Register.propTypes = {
  history: PropTypes.object,
};

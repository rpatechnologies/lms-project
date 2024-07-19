import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import s from "./styles.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import getAxiosInstance from "@/utils/axiosInstance";
import { AxiosError, AxiosResponse } from "axios";
import { LoginResponse } from "@/types/auth";
import { getToken, setTokenCookie } from "@/utils/authUtils";
import { useRouter } from "next/router";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const token = getToken()
 if(token){
  return router.push('/dashboard')
 }
  
  // useEffect(()=>{},[])
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    getAxiosInstance().post('/auth/login', {
      email, password
    }).then((res: AxiosResponse<LoginResponse>) => {
      if (res.status == 200) {
        if (res.data.tokens && res.data.tokens.access.token) {
          setTokenCookie(res.data.tokens.access.token,res.data.tokens.refresh.token)
          return router.push('/dashboard')
        }

      }
    }).catch((e: AxiosError<{ message: string }>) => {
      if (e.response?.data?.message) {
        setError(e.response.data.message)

      }

    })
  }
  return (
    <div className={s.manidiv}>
      <Row className="justify-content-md-center p-0">
        <Col xs={12} md={6} xl={6} className={s.col1}>
          <img src="assets/images/ap4loginImg.png" alt="Login" className={s.col1Img} />
          <div className={s.textMainDiv}>
            <p className={s.text}>There’s  <span className={s.nolimits}>no limit </span> to <br /> what you can <br />
              <span className={s.nolimits}>learn</span>.</p>
            <div className={s.imagesDiv}>
              <img className={s.arrows} src="assets\images\leftArrow.png" alt="" />
              <img className={s.arrows} src="assets\images\rightArrow.png" alt="" />
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} xl={6} className={`${s.col2}  d-flex justify-content-start align-items-center flex-row`}   >
          <Form className={s.form} onSubmit={handleSubmit}>
            <img src="assets\images\AP4-logo_.png" alt="" />
            <h1 className={s.h1}>Log In</h1>
            <p className={s.acc}>
              Don’t have an account?{" "}
              <span className={s.contactUs}>Contact Us</span>
            </p>
            <span style={{ color: 'red' }}>
              {error}
            </span>
            <Form.Group className={s.formGroup}>
              <Form.Label className={s.formLabel}>Username</Form.Label>
              <img src="assets\images\username1.png" alt="email icon" className={s.inputIcon} />
              <Form.Control className={s.formControl} type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className={s.formGroup}>
              <Form.Label className={s.formLabel}>Password</Form.Label>
              <img src="assets\images\password.png" alt="email icon" className={s.inputIcon} />
              <Form.Control className={s.formControl} type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className={s.checkBoxparant}>
              {[""].map((type) => (
                <div key={`default-${type}`} className={s.checkBox}>
                  <Form.Check id={`default-${type}`} label={`Remember me ${type}`} className={s.checkbx} />
                </div>
              ))}
              <p className={`${s.contactUs} mb-0`}>Forgot password?</p>
            </div>
            <div className={s.btn}>
              <button type="submit" className={s.submitBtn} > Log In </button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;

import React from "react";
import s from "./style.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Contactus() {
  return (
    <div className={s.manidiv}>
      <Row className="justify-content-md-center p-0">
        <Col xs={12} md={6} xl={6} className={s.col1}>
          <img
            src="assets/images/contactUsImg.png"
            alt="Contact Us"
            className={s.col1Img}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          xl={6}
          className={`${s.col2} d-flex justify-content-start align-items-center flex-row`}
        >
          <Form className={s.form}>
            <h1 className={s.h1}>Get In Touch</h1>
            <p className={s.acc}>
              24/7 we will answer your questions and problems.
            </p>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className={s.formGroup}>
                  <Form.Label className={s.formLabel}>First Name</Form.Label>
                  <img
                    src="assets/images/username1.png"
                    alt="first name icon"
                    className={s.inputIcon}
                  />
                  <Form.Control
                    className={s.formControl}
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className={s.formGroup}>
                  <Form.Label className={s.formLabel}>Last Name</Form.Label>
                  <img
                    src="assets/images/username1.png"
                    alt="last name icon"
                    className={s.inputIcon}
                  />
                  <Form.Control
                    className={s.formControl}
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className={s.formGroup}>
              <Form.Label className={s.formLabel}>Email</Form.Label>
              <img
                src="assets\images\email.png"
                alt="email icon"
                className={s.inputIcon}
              />
              <Form.Control
                className={s.formControl}
                type="email"
                placeholder="rosytran123@gmail.com"
              />
            </Form.Group>
            <Form.Group className={s.formGroup}>
              <Form.Label className={s.formLabel}>Phone</Form.Label>
              <img
                src="assets\images\call.png"
                alt="phone icon"
                className={s.inputIcon}
              />
              <Form.Control
                className={s.formControl}
                type="tel"
                placeholder="+91-123456789"
              />
            </Form.Group>
            <Form.Group className={s.formGroup}>
              <Form.Label className={s.formLabel}>
                Describe Your Issue
              </Form.Label>
              <Form.Control
                as="textarea"
                className={s.formControlDes}
                placeholder="Describe Your Issue"
              />
            </Form.Group>
            <div className={s.btn}>
              <button type="submit" className={s.submitBtn}>
                Send
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Contactus;

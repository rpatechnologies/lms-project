import React from "react";
import s from "./style.module.css"
import Link from "next/link";
function Navbar() {
  return (
    <nav
      className="navbar navbar-light bg-light px-4"
      style={{ height: "70px" }}
    >
      <Link className="navbar-brand" href="#">
        Welcome Back!{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </Link>
      <div className="d-flex align-items-center">
        <img src="assets/images/searchIcon.png" alt="Search" className="mx-3" />
        <img
          src="assets/images/bellicon.png"
          alt="Notifications"
          className="mx-3"
        />
        <div className={`${s.dpdown} dropdown`}>
          <Link
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="assets\images\Ellipse 73.png" // Replace with your image URL
              alt="Rosy Tran"
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <div className="d-flex flex-column">
              <strong>Rosy Tran</strong>
              <small className="text-muted">Student</small>
            </div>
          </Link>
          <ul className="dropdown-menu text-small shadow"  aria-labelledby="dropdownUser2" >
            <li>
              <Link className="dropdown-item" href="#">
                New project...
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {GrLogout} from "react-icons/gr"
import {CgProfile} from "react-icons/cg"
import {CiSettings} from "react-icons/ci"
import {BiLogIn} from "react-icons/bi"
import {AiOutlineApi, AiOutlineSearch, AiOutlineUser} from "react-icons/ai"
import {IoIosRadioButtonOn} from "react-icons/io"
// Redux

// users
import profile from '../public/images/profile.jpg'
import Link from "next/link";

interface ProfileInterface {
  isDark: any,
  tanentCallback: any
};


const ProfileMenu = (Props: ProfileInterface) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setusername] = useState("Admin");

  const model = "tanent"

  function handleTanentClick(){
    Props.tanentCallback(true , model);
  }

  const env = "env"

  function handleEnvClick(){
    Props.tanentCallback(true , env);
  }

  const api = "api"
  function handleApiClick(){
    Props.tanentCallback(true , api);
  }
  const setting = "setting"
  function handleSettingClick(){
    Props.tanentCallback(true , setting);
  }
  const active = "active"
  function handleActiveClick(){
    Props.tanentCallback(true , active);
  }

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block mt-2"
      >
        <DropdownToggle
          className="btn header-item d-flex text-center "
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=20&h=20&dpr=2"
            alt="Header Avatar"
          />
          <span className={`d-none d-xl-inline-block ms-2 me-1 text-light tetxt-center d-flex mr-2 ${Props.isDark ? "text-light" : "text-dark"}`}>{username}</span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile" className="d-flex">
             <CgProfile className="mr-2 mt-1"/>
            {("Profile")}{" "}
          </DropdownItem>

          <DropdownItem tag="a" href="/login" className="d-flex">
             <BiLogIn className="mr-2 mt-1"/>
            {("Login")}{" "}
          </DropdownItem>

          <DropdownItem tag="a" href="/register" className="d-flex">
          <BiLogIn className="mr-2 mt-1"/>
            {("Sign Up")}{" "}
          </DropdownItem>
          <DropdownItem tag="a" href="#" className="d-flex mt-1" onClick={handleSettingClick}>
            {/* <span className="badge bg-success float-end">11</span> */}
            <CiSettings className="mr-2 mt-1"/>
            {("Settings")}
          </DropdownItem>

          <DropdownItem tag="a" className="d-flex" onClick={handleTanentClick}>
             <AiOutlineUser className="mr-2 mt-1"/>
             Tanent Name
          </DropdownItem>
          <DropdownItem tag="a" className="d-flex" onClick={handleEnvClick}>
          <AiOutlineUser className="mr-2 mt-1"/>
             Environment Name
          </DropdownItem>
          <DropdownItem tag="a" className="d-flex" onClick={handleApiClick}>
             <AiOutlineApi className="mr-2 mt-1"/>
             API Definition
          </DropdownItem>

          <DropdownItem tag="a" className="d-flex" onClick={handleTanentClick}>
          <AiOutlineApi className="mr-2 mt-1"/>
             New Integration
          </DropdownItem>
          <DropdownItem tag="a" className="d-flex" onClick={handleActiveClick}>
             <IoIosRadioButtonOn className="mr-2 mt-1"/>
             Active Button
          </DropdownItem>
          <DropdownItem tag="a" className="d-flex" onClick={handleTanentClick}>
             <AiOutlineSearch className="mr-2 mt-1"/>
             Search Environment
          </DropdownItem>
          <DropdownItem tag="a" className="d-flex" >
          <AiOutlineUser className="mr-2 mt-1"/>
              New Environment
          </DropdownItem>
          <DropdownItem tag="a" className="d-flex" >
          <AiOutlineApi className="mr-2 mt-1"/>
             New Integration
          </DropdownItem>

          <div className="dropdown-divider" />
          <Link href="/login" className="dropdown-item d-flex">
            <GrLogout className="mr-2 mt-1"/>
            <span>{("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>

      
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
};


export default ProfileMenu
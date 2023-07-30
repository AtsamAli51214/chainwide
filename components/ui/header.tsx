"use client";
import {useState} from "react";
import Link from "next/link";
import img from '../../public/images/m.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProfileMenu from "../Dropdowns";
import SocialDrip from "../SocialDrip";
import Toggler from "../toggler";
import RootLayout from "@/app/layout";
import TanentModal from "../TanentBox";
import EnvModal from "../EnvModel";
import ApiModal from "../apiModel";
import SettingModal from "../SettingModal";
import ActiveBtnModal from "../ActiveBtnModel";

const imgUrl:string = img.src;


function tToggle() {
  var body = document.body;
  if (window.screen.width <= 1000) {
    body.classList.toggle("sidebar-enable");
  } else {
    body.classList.toggle("vertical-collpsed");
    body.classList.toggle("sidebar-enable");
  }

}
export default function Header(props:any) {
  const [isDark , setIsDark] = useState(true);
  const [tanentModel , setTanentModal] = useState(false);
  const [envModel , setEnvModel] = useState(false);
  const [isApi, setIsApi]= useState(false);
  const [isSetting , setIsSetting] = useState(false);
  const [isActive , setIsActive] = useState(false)

  function handleClick(state:any){
    setIsDark(state);
    props.callback(state);
   
  }

  function handleTanentClick(state:any , model:any ){
     if(model === "tanent"){
      setTanentModal(state);
     } else if(model === "env"){
      setEnvModel(state);
     } else if(model === "api"){
       setIsApi(state);
     } else if(model === "setting"){
      setIsSetting(state);
    } else if(model === "active"){
      setIsActive(state);
    }
    
  }

  function handleTanentClose(){
    console.log("You Clicked me")
    setTanentModal(false);
    setIsApi(false);
    setEnvModel(false);
    setIsSetting(false);
    setIsActive(false);
  }

  return (
    <>
      <div className="absolute w-full z-30 d-flex items-center" >
        <header id="page-topbar " style={{ left: '0 !important' , background: isDark ?  `#262b3c` : "white"}}>
          <div className="navbar-header d-flex items-center">
            <div className="d-flex justify-between" style={{ width: "1260px" }}>
              <div className="d-flex ml-4 mt-2">
                <div className="navbar-brand-box d-md-block">
                  <Link href="#" className="logo logo-dark" >
                    <span className="logo-s ">
                      <img style={{height:"70px" , width: '80px'}} className="rounded-circle" src={imgUrl} alt="logoo" />
                    </span>
                  </Link>
                </div>

                <button

                  type="button"
                  onClick={() => {
                    tToggle();
                  }}
                  className="btn btn-sm px-3 font-size-20 header-item ml-4"
                  id="vertical-menu-btn"
                >
                  <i className={`bi bi-list ${isDark? 'text-light' : 'text-dark'}`}></i>
                </button>
              </div>

              <div className="d-flex  justify-content-between w-45 absolute right-3">
                <SocialDrip isDark={isDark} />
                <ProfileMenu isDark={true} tanentCallback={handleTanentClick} />
                <Toggler callback={handleClick}  isDark={isDark} />
                  {tanentModel === true ? <TanentModal callback={handleTanentClose}  tanentModel={tanentModel} /> : null } 
                  {envModel === true ? <EnvModal callback={handleTanentClose}  tanentModel={envModel} /> : null } 
                  {isApi === true ? <ApiModal callback={handleTanentClose}  tanentModel={isApi} /> : null }
                  {isSetting === true ? <SettingModal callback={handleTanentClose}  tanentModel={isSetting} /> : null }
                  {isActive === true ? <ActiveBtnModal callback={handleTanentClose}  tanentModel={isActive} /> : null }
              </div>






            </div>
          </div>
        </header>
      </div>
    </>
  );
};
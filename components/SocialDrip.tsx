import React,{useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'


// import images
import github from "../public/images/brands/github.png";
import bitbucket from "../public/images/brands/bitbucket.png";
import dribbble from "../public/images/brands/dribbble.png";
import dropbox from "../public/images/brands/dropbox.png";
import mail_chimp from "../public/images/brands/mail_chimp.png";
import slack from "../public/images/brands/slack.png";


const githubImg: string =github.src;
const bitbucketImg: string =bitbucket.src;
const dribbbleImg: string =dribbble.src;
const dropboxImg: string =dropbox.src;
const mail_chimpImg: string =mail_chimp.src;
const slackImg: string =slack.src;

const SocialDrip = (props:any) => {
    const [socialDrp, setsocialDrp] = useState(false);

  return (
    <>
     <Dropdown
              className="d-none d-lg-inline-block ms-1 mt-2"
              isOpen={socialDrp}
              toggle={() => {
                setsocialDrp(!socialDrp);
              }}
            >

              <DropdownToggle
                className="btn header-item noti-icon "
                tag="button"
              >
                <i className={`bi bi-qr-code ${props.isDark? 'text-light' : 'text-dark'}`}></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-end">
                <div className="px-lg-2">
                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" href="#">
                        <img src={githubImg} alt="Github" />
                        <span>GitHub</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" href="#">
                        <img src={bitbucketImg} alt="bitbucket" />
                        <span>Bitbucket</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" href="#">
                        <img src={dribbbleImg} alt="dribbble" />
                        <span>Dribbble</span>
                      </Link>
                    </Col>
                  </Row>

                  <Row className="no-gutters">
                    <Col>
                      <Link className="dropdown-icon-item" href="#">
                        <img src={dropboxImg} alt="dropbox" />
                        <span>Dropbox</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" href="#">
                        <img src={mail_chimpImg} alt="mail_chimp" />
                        <span>Mail Chimp</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" href="#">
                        <img src={slackImg} alt="slack" />
                        <span>Slack</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>
    </>
  )
}

export default SocialDrip
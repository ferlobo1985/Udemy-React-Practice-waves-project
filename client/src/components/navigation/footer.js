import React from 'react';

import ContactsIcon from '@material-ui/icons/Contacts';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { useSelector } from 'react-redux';

const Footer = () => {
    const site = useSelector(state=>state.site);

    return(
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    WAVES
                </div>
                { site && site.vars ? 
                <div className="wrapper">
                    <div className="left">
                        <h2>Contact information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <ContactsIcon/>
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>{site.vars.address}</div>
                                </div>
                            </div>
                            <div className="tag">
                                <TimelapseIcon/>
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>{site.vars.phone}</div>
                                </div>
                            </div>
                            <div className="tag">
                                <PhoneIcon/>
                                <div className="nfo">
                                    <div>Working hours</div>
                                    <div>{site.vars.hours}</div>
                                </div>
                            </div>
                            <div className="tag">
                                <EmailIcon/>
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>{site.vars.email}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <h2>Be the first to know</h2>
                        <div>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </div>
                        </div>
                    </div>
                </div>
                :null}

            </div>
        </footer>
    )

}

export default Footer;
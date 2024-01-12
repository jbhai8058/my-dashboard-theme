import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <Fragment>
            <div>
                <div className="left-side-bar">
                    <div className="brand-logo">
                        <a href="index.html">
                            <img src="vendors/images/deskapp-logo.svg" alt className="dark-logo" />
                            <img src="vendors/images/deskapp-logo-white.svg" alt className="light-logo" />
                        </a>
                        <div className="close-sidebar" data-toggle="left-sidebar-close">
                            <i className="ion-close-round" />
                        </div>
                    </div>
                    <div className="menu-block customscroll">
                        <div className="sidebar-menu">
                            <ul id="accordion-menu">
                                <li className="dropdown">
                                    <a href="javascript:;" className="dropdown-toggle">
                                        <span className="micon dw dw-house-1" /><span className="mtext">Home</span>
                                    </a>
                                    <ul className="submenu">
                                        <li><Link to='/'>Dashboard style 1</Link></li>
                                        <li><Link to='/dashboard2'>Dashboard style 2</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="javascript:;" className="dropdown-toggle">
                                        <span className="micon dw dw-list3" /><span className="mtext">Multi Level Menu</span>
                                    </a>
                                    <ul className="submenu">
                                        <li><a href="javascript:;">Level 1</a></li>
                                        <li><a href="javascript:;">Level 1</a></li>
                                        <li><a href="javascript:;">Level 1</a></li>
                                        <li className="dropdown">
                                            <a href="javascript:;" className="dropdown-toggle">
                                                <span className="micon fa fa-plug" /><span className="mtext">Level 2</span>
                                            </a>
                                            <ul className="submenu child">
                                                <li><a href="javascript:;">Level 2</a></li>
                                                <li><a href="javascript:;">Level 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:;">Level 1</a></li>
                                        <li><a href="javascript:;">Level 1</a></li>
                                        <li><a href="javascript:;">Level 1</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-overlay" />
            </div>

        </Fragment>
    )
}

import React, { Fragment } from 'react'

export default function SecondDashboard() {
    return (
        <Fragment>
            <div className="main-container">
                <div className="xs-pd-20-10 pd-ltr-20">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="title">
                                    <h4>Dashboard</h4>
                                </div>
                                <nav aria-label="breadcrumb" role="navigation">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-md-6 col-sm-12 text-right">
                                <div className="dropdown">
                                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                        January 2018
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Export List</a>
                                        <a className="dropdown-item" href="#">Policies</a>
                                        <a className="dropdown-item" href="#">View Assets</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix progress-box">
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <div className="card-box pd-30 height-100-p">
                                <div className="progress-box text-center">
                                    <input type="text" className="knob dial1" defaultValue={80} data-width={120} data-height={120} data-linecap="round" data-thickness="0.12" data-bgcolor="#fff" data-fgcolor="#1b00ff" data-angleoffset={180} readOnly />
                                    <h5 className="text-blue padding-top-10 h5">My Earnings</h5>
                                    <span className="d-block">80% Average <i className="fa fa-line-chart text-blue" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <div className="card-box pd-30 height-100-p">
                                <div className="progress-box text-center">
                                    <input type="text" className="knob dial2" defaultValue={70} data-width={120} data-height={120} data-linecap="round" data-thickness="0.12" data-bgcolor="#fff" data-fgcolor="#00e091" data-angleoffset={180} readOnly />
                                    <h5 className="text-light-green padding-top-10 h5">Business Captured</h5>
                                    <span className="d-block">75% Average <i className="fa text-light-green fa-line-chart" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <div className="card-box pd-30 height-100-p">
                                <div className="progress-box text-center">
                                    <input type="text" className="knob dial3" defaultValue={90} data-width={120} data-height={120} data-linecap="round" data-thickness="0.12" data-bgcolor="#fff" data-fgcolor="#f56767" data-angleoffset={180} readOnly />
                                    <h5 className="text-light-orange padding-top-10 h5">Projects Speed</h5>
                                    <span className="d-block">90% Average <i className="fa text-light-orange fa-line-chart" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <div className="card-box pd-30 height-100-p">
                                <div className="progress-box text-center">
                                    <input type="text" className="knob dial4" defaultValue={65} data-width={120} data-height={120} data-linecap="round" data-thickness="0.12" data-bgcolor="#fff" data-fgcolor="#a683eb" data-angleoffset={180} readOnly />
                                    <h5 className="text-light-purple padding-top-10 h5">Panding Orders</h5>
                                    <span className="d-block">65% Average <i className="fa text-light-purple fa-line-chart" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
                            <div className="card-box pd-30 pt-10 height-100-p">
                                <h2 className="mb-30 h4">Browser Visit</h2>
                                <div className="browser-visits">
                                    <ul>
                                        <li className="d-flex flex-wrap align-items-center">
                                            <div className="icon"><img src="vendors/images/chrome.png" alt /></div>
                                            <div className="browser-name">Google Chrome</div>
                                            <div className="visit"><span className="badge badge-pill badge-primary">50%</span></div>
                                        </li>
                                        <li className="d-flex flex-wrap align-items-center">
                                            <div className="icon"><img src="vendors/images/firefox.png" alt /></div>
                                            <div className="browser-name">Mozilla Firefox</div>
                                            <div className="visit"><span className="badge badge-pill badge-secondary">40%</span></div>
                                        </li>
                                        <li className="d-flex flex-wrap align-items-center">
                                            <div className="icon"><img src="vendors/images/safari.png" alt /></div>
                                            <div className="browser-name">Safari</div>
                                            <div className="visit"><span className="badge badge-pill badge-success">40%</span></div>
                                        </li>
                                        <li className="d-flex flex-wrap align-items-center">
                                            <div className="icon"><img src="vendors/images/edge.png" alt /></div>
                                            <div className="browser-name">Microsoft Edge</div>
                                            <div className="visit"><span className="badge badge-pill badge-warning">20%</span></div>
                                        </li>
                                        <li className="d-flex flex-wrap align-items-center">
                                            <div className="icon"><img src="vendors/images/opera.png" alt /></div>
                                            <div className="browser-name">Opera Mini</div>
                                            <div className="visit"><span className="badge badge-pill badge-info">20%</span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 mb-30">
                            <div className="card-box pd-30 pt-10 height-100-p">
                                <h2 className="mb-30 h4">World Map</h2>
                                <div id="browservisit" style={{ width: '100%!important', height: 380 }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 mb-30">
                            <div className="card-box pd-30 height-100-p">
                                <h4 className="mb-30 h4">Compliance Trend</h4>
                                <div id="compliance-trend" className="compliance-trend" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 mb-30">
                            <div className="card-box pd-30 height-100-p">
                                <h4 className="mb-30 h4">Records</h4>
                                <div id="chart" className="chart" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-wrap pd-20 mb-20 card-box">
                        DeskApp - Bootstrap 4 Admin Template By <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

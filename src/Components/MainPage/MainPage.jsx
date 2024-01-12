import React, { Fragment } from 'react'
import Header from '../Layout/Header'
import SideBar from '../Layout/SideBar'
import Dashboard from '../Layout/Dashboard'

export default function MainPage() {
    return (
        <Fragment>
            <Header />
            <SideBar />
            <Dashboard />
        </Fragment>
    )
}

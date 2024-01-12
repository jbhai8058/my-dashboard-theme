import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainPage from '../Components/MainPage/MainPage'
import SecondDashboard from '../Components/Layout/SecondDashboard';

export default function AppRouter() {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<MainPage />} />
                    <Route exact path='/dashboard2' element={<SecondDashboard />} />
                </Routes>
            </Fragment>
        </Router>
    )
}

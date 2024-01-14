import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainPage from '../Components/MainPage/MainPage'
import DashboardTwo from '../Components/DashboardTwo/DashboardTwo';
import WithLoader from '../Components/Loader/WithLoader';

export default function AppRouter() {

    const WrappedMainPage = WithLoader(MainPage);
    const WrappedDashboardTwo = WithLoader(DashboardTwo);

    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<WrappedMainPage />} />
                    <Route exact path='/dashboard2' element={<WrappedDashboardTwo />} />
                </Routes>
            </Fragment>
        </Router>
    )
}

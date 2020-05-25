import React from "react";
import './Content.css';
import {Route} from "react-router-dom";
import Pageheader from "./Pageheader";
import Breadcrumb from "./Breadcrumb";
import Dashboard from "./Dashboard/Dashboard";

export default function Content() {
    return (
        <>
            <div className="content-wrapper">
                <Pageheader/>
                <Breadcrumb/>
                <div className="content">
                    <Route exact path="/">
                        <Dashboard/>
                    </Route>
                </div>
            </div>
        </>
    )
}

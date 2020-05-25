import React from "react";
import './Content.css';
import {Route} from "react-router-dom";
import Pageheader from "./Pageheader";
import Breadcrumb from "./Breadcrumb";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import Userlist from "./User/Userlist";
import Newuser from "./User/Newuser";
import Settings from "./Settings/Settings";
import Subscribe from "./Subscribe/Subscribe";
import SubscribeEdit from "./Subscribe/Subscribe-edit";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";

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
                    <Route path="/settings">
                        <Settings/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/userlist">
                        <Userlist/>
                    </Route>
                    <Route path="/newuser">
                        <Newuser/>
                    </Route>
                    <Route path="/subscribe">
                        <Subscribe/>
                    </Route>
                    <Route path="/subscribe_edit">
                        <SubscribeEdit/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/navbar">
                        <Navbar/>
                    </Route>
                </div>
            </div>
        </>
    )
}

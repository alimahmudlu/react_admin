import React from "react";
import './Content.css';
import {Route} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import Userlist from "./User/Userlist";
import Newuser from "./User/Newuser";
import Settings from "./Settings/Settings";
import Subscribe from "./Subscribe/Subscribe";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Pages from "./Pages/Pages";
import Category from "./Category/Category";
import Post from "./Post/Post";

export default function Content() {
    return (
        <>
            <div className="content-wrapper">
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
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/navbar">
                    <Navbar/>
                </Route>
                <Route path="/pages">
                    <Pages/>
                </Route>
                <Route path="/category">
                    <Category/>
                </Route>
                <Route path="/post">
                    <Post/>
                </Route>
            </div>
        </>
    )
}

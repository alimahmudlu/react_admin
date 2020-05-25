import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Homepage() {
    const [visible, setVisible] = useState(true);

    function toggle() {
        setVisible(!visible);
    }
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <Navbar toggle={toggle} visible={visible} setVisible={setVisible}/>
                        <div className={["page-content", visible ? "sidebar-xs" : ""].join(" ")}>
                            <Sidebar toggle={toggle} visible={visible} setVisible={setVisible}/>
                            <Content/>
                        </div>
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Homepage;

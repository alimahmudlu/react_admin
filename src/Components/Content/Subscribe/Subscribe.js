import React from "react";
import {Route} from "react-router-dom";
import Subscribelist from "./Subscribelist";
import SubscribeEdit from "./Subscribe-edit";
import {Helmet} from "react-helmet";


export default function Subscribe() {
    return (
        <>
            <Helmet>
                <title>Abunə ol | Admin Panel</title>
            </Helmet>
            <Route exact path="/subscribe">
                <Subscribelist/>
            </Route>
            <Route path="/subscribe/edit">
                <SubscribeEdit/>
            </Route>
        </>
    )
}

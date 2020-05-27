import React from "react";
import {Route} from "react-router-dom";
import Subscribelist from "./Subscribelist";
import SubscribeEdit from "./Subscribe-edit";

export default function Subscribe() {
    return (
        <>
            <Route exact path="/subscribe">
                <Subscribelist/>
            </Route>
            <Route path="/subscribe/edit">
                <SubscribeEdit/>
            </Route>
        </>
    )
}

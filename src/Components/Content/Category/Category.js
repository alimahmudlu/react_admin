import React from "react";
import {Route} from "react-router-dom";
import Categorylist from "./Categorylist";
import CategoryAdd from "./CategoryAdd";
import CategoryEdit from "./CategoryEdit";

export default function Category() {
    return (
        <>
            <Route exact path="/category/">
                <Categorylist/>
            </Route>
            <Route path="/category/add">
                <CategoryAdd/>
            </Route>
            <Route path="/category/edit">
                <CategoryEdit/>
            </Route>
        </>
    )
}

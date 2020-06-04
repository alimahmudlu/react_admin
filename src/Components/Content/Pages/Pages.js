import React from "react";
import {Route} from "react-router-dom";
import PagesList from "./Pageslist";
import PagesAdd from "./PagesAdd";
import PagesEdit from "./PagesEdit";
import {Helmet} from "react-helmet";


export default function Pages() {
    return (
        <>
            <Helmet>
                <title>Səhifələr | Admin panel</title>
            </Helmet>
            <Route exact path="/pages/">
                <PagesList/>
            </Route>
            <Route path="/pages/add">
                <PagesAdd/>
            </Route>
            <Route path="/pages/edit">
                <PagesEdit/>
            </Route>
        </>
    )
}

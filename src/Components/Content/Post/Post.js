import React from "react";
import {Route} from "react-router-dom";
import PostList from "./Postlist";
import PostAdd from "./PostAdd";

export default function Post() {
    return (
        <>
            <Route exact path="/post/">
                <PostList/>
            </Route>
            <Route exact path="/post/add">
                <PostAdd/>
            </Route>
            <Route exact path="/post/edit">
                EDIT
            </Route>
        </>
    )
}

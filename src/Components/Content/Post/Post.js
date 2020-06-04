import React from "react";
import {Route} from "react-router-dom";
import PostList from "./Postlist";
import PostAdd from "./PostAdd";
import PostCategoryList from "./PostCategory/PostCategorylist";
import PostCategoryAdd from "./PostCategory/PostCategoryAdd";
import PostCategoryEdit from "./PostCategory/PostCategoryEdit";
import {Helmet} from "react-helmet";


export default function Post() {
    return (
        <>
            <Helmet>
                <title>Postlar | Admin Panel</title>
            </Helmet>
            <Route exact path="/post/">
                <PostList/>
            </Route>
            <Route path="/post/add">
                <PostAdd/>
            </Route>
            <Route path="/post/edit">
                EDIT
            </Route>
            <Route path="/post/category">
                <PostCategoryList/>
            </Route>
            <Route path="/post/categoryadd">
                <PostCategoryAdd/>
            </Route>
            <Route path="/post/categoryedit">
                <PostCategoryEdit/>
            </Route>
        </>
    )
}

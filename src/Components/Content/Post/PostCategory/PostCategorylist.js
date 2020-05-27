import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList,faPen,faPlus,faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Pageheader from "../../Pageheader";
import Breadcrumb from "../../Breadcrumb";

export default function PostCategoryList() {
    return (
        <>
            <Pageheader
                pageheader_header="Post kateqoriyaları"
                pageheader_description="Post kateqoriyaları"
                pageheader_icon="fas fa-file-alt"
            />
            <Breadcrumb/>
            <div className="content">
                <div className="button-group mb-2">
                    <Link to="/post/categoryadd" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                        <b>
                            <FontAwesomeIcon icon={faPlus} className="icon"/>
                        </b>
                        Yeni Post Kateqoriyası əlavə et
                    </Link>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-body">
                            <div className="card-header-body-image">
                                <FontAwesomeIcon icon={faList} className="icon card-header-body-image--svg"/>
                            </div>
                            <div className="card-header-body-content">
                                <h1 className="card-header-body-content--header">
                                    Post Kateqoriyası listi
                                </h1>
                                <span className="card-header-body-content--description">
                                    Post Kateqoriyaların listinə baxa, tənzimləyə və ya silə bilərsiniz
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive-lg">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Post Kateqoriyasının adı</th>
                                    <th scope="col">Səhifənin adı</th>
                                    <th scope="col">Sluq</th>
                                    <th scope="col">Rəngi</th>
                                    <th scope="col">İkonu</th>
                                    <th scope="col">Vəziyyəti</th>
                                    <th scope="col">Əməliyyatlar</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>film</td>
                                    <td>Blog</td>
                                    <td>film</td>
                                    <td>#f2a333</td>
                                    <td>faVideo</td>
                                    <td>
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="blog_pagehead_switch"/>
                                            <label className="custom-control-label" htmlFor="blog_pagehead_switch"> </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to="/post/categoryedit" className="btn btn-success mr-2">
                                                <FontAwesomeIcon icon={faPen} className="icon"/>
                                            </Link>
                                            <Link to="/post/category" className="btn btn-danger">
                                                <FontAwesomeIcon icon={faTrash} className="icon"/>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

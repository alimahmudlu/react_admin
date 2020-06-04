import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faEye, faPen, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Pageheader from "../Pageheader";
import Breadcrumb from "../Breadcrumb";
import {Helmet} from "react-helmet";


export default function Userlist() {
    return (
        <>
            <Helmet>
                <title>İstifadəçilərin Listi | Admin Panel</title>
            </Helmet>
            <Pageheader
                pageheader_header="İstifadəçilər"
                pageheader_description="İstifadəçilərin listi"
                pageheader_icon="fas fa-users"
            />
            <Breadcrumb/>
            <div className="content">
                <div className="button-group mb-2">
                    <Link to="/newuser" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                        <b>
                            <FontAwesomeIcon icon={faUserPlus} className="icon"/>
                        </b>
                        Yeni istifadəçi əlavə et
                    </Link>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-body">
                            <div className="card-header-body-image">
                                <FontAwesomeIcon icon={faCalendarAlt} className="icon card-header-body-image--svg"/>
                            </div>
                            <div className="card-header-body-content">
                                <h1 className="card-header-body-content--header">
                                    İstifadəçi Listi
                                </h1>
                                <span className="card-header-body-content--description">
                                    İstifadəçi Listi
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
                                    <th scope="col">Ad, Soyad</th>
                                    <th scope="col">İstifadəçi adı</th>
                                    <th scope="col">Telefon nömrəsi</th>
                                    <th scope="col">Emaili</th>
                                    <th scope="col">Qrupu</th>
                                    <th scope="col">Vəziyyəti</th>
                                    <th scope="col">Əməliyyatlar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Əli Mahmudlu</td>
                                    <td>alimahmudlu</td>
                                    <td>+99470 855 02 35</td>
                                    <td>alimahmudlu@gmail.com</td>
                                    <td>admin</td>
                                    <td>
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="alimahmudlu_switch"/>
                                            <label className="custom-control-label" htmlFor="alimahmudlu_switch"> </label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to="/profile" className="btn btn-info mr-2">
                                                <FontAwesomeIcon icon={faEye} className="icon"/>
                                            </Link>
                                            <Link to="/profile/owndetails" className="btn btn-success">
                                                <FontAwesomeIcon icon={faPen} className="icon"/>
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

import React from "react";
import "./Subscribe.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faEye, faPen} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

export default function Subscribe() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faBell} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Subscribe
                            </h1>
                            <span className="card-header-body-content--description">
                                Subscribe
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
                                <th scope="col">E-mail</th>
                                <th scope="col">Qeyd olma Tarixi</th>
                                <th scope="col">Vəziyyəti</th>
                                <th scope="col">Əməliyyatlar</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>alimahmudlu@gmail.com</td>
                                <td>25.05.2020 - 21:30</td>
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
        </>
    )
}

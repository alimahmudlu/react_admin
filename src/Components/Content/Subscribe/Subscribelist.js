import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faTrash} from "@fortawesome/free-solid-svg-icons";
import Pageheader from "../Pageheader";
import Breadcrumb from "../Breadcrumb";

export default function Subscribelist() {
    return (
        <>
            <Pageheader
                pageheader_header="Abunə olanlar"
                pageheader_description="Abunə olanlar"
                pageheader_icon="fas fa-bell"
            />
            <Breadcrumb/>
            <div className="content">
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-body">
                            <div className="card-header-body-image">
                                <FontAwesomeIcon icon={faList} className="icon card-header-body-image--svg"/>
                            </div>
                            <div className="card-header-body-content">
                                <h1 className="card-header-body-content--header">
                                    Abunə olanların listi
                                </h1>
                                <span className="card-header-body-content--description">
                                    Abunə olanlara burdan baxa, tənzimləyə və ya silə bilərsiniz
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
                                            <button type="button" className="btn btn-danger">
                                                <FontAwesomeIcon icon={faTrash} className="icon"/>
                                            </button>
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

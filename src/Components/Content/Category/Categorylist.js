import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell, faCopy,
    faEye,
    faPen,
    faPlus,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function Categorylist() {
    return (
        <>
            <div className="button-group mb-2">
                <Link to="/pages/add" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                    <b>
                        <FontAwesomeIcon icon={faPlus} className="icon"/>
                    </b>
                    Yeni Kateqoriya əlavə et
                </Link>
            </div>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faCopy} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Kateqoriyalar
                            </h1>
                            <span className="card-header-body-content--description">
                                Kateqoriyalar
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
                                <th scope="col">Kateqoriyanın adı</th>
                                <th scope="col">Qeyd olma Tarixi</th>
                                <th scope="col">Səhifə sayı</th>
                                <th scope="col">Komponent sayı</th>
                                <th scope="col">Vəziyyəti</th>
                                <th scope="col">Əməliyyatlar</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Blog</td>
                                <td>25.05.2020 - 22:59</td>
                                <td>2</td>
                                <td>7</td>
                                <td>
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="alimahmudlu_switch"/>
                                        <label className="custom-control-label" htmlFor="alimahmudlu_switch"> </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex">
                                        <Link to="/category/edit" className="btn btn-success mr-2">
                                            <FontAwesomeIcon icon={faPen} className="icon"/>
                                        </Link>
                                        <Link to="/category/" className="btn btn-danger">
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
        </>
    )
}

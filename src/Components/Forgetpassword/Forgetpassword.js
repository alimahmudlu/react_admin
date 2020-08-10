import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function Forgetpassword() {
    return (
        <>
            <div className="vertical-center horizontal-center d-flex min-vh-100">
                <form className="login-form">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header-body">
                                <div className="card-header-body-image">
                                    <FontAwesomeIcon icon={faQuestion} className="icon card-header-body-image--svg"/>
                                </div>
                                <div className="card-header-body-content">
                                    <h1 className="card-header-body-content--header">
                                        Forget Password
                                    </h1>
                                    <span className="card-header-body-content--description">
                                        Parolun yenilənməsi
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                                <div className="form-group form-group-feedback form-group-feedback-right">
                                    <input type="text" className="form-control" placeholder="Username" />
                                    <div className="form-control-feedback">
                                        <FontAwesomeIcon icon={faUser} className="icon text-muted"/>
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <button className="btn btn-primary d-block w-100">
                                        Parolu yenilə
                                        {/*<FontAwesomeIcon icon={faChevronRight} className="icon ml-2"/>*/}
                                    </button>
                                </div>
                                <div className="form-group ">
                                    <Link to="/login" className="btn btn-link d-block w-100">
                                        Daxil ol
                                    </Link>
                                </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

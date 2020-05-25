import React from "react";
import "./Login.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faSignInAlt,
    faUnlockAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="vertical-center horizontal-center d-flex min-vh-100">
                <form className="login-form">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header-body">
                                <div className="card-header-body-image">
                                    <FontAwesomeIcon icon={faSignInAlt} className="icon card-header-body-image--svg"/>
                                </div>
                                <div className="card-header-body-content">
                                    <h1 className="card-header-body-content--header">
                                        Login
                                    </h1>
                                    <span className="card-header-body-content--description">
                                        Adminpanelə giriş
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group form-group-feedback form-group-feedback-left">
                                    <input type="text" className="form-control" placeholder="Username" />
                                    <div className="form-control-feedback">
                                        <FontAwesomeIcon icon={faUser} className="icon text-muted"/>
                                    </div>
                                </div>
                                <div className="form-group form-group-feedback form-group-feedback-left">
                                    <input type="password" className="form-control" placeholder="Password" />
                                    <div className="form-control-feedback">
                                        <FontAwesomeIcon icon={faUnlockAlt} className="icon text-muted"/>
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <button className="btn btn-primary d-block w-100">
                                        Daxil ol
                                        {/*<FontAwesomeIcon icon={faChevronRight} className="icon ml-2"/>*/}
                                    </button>
                                </div>
                                <div className="form-group ">
                                    <Link to="/forgetpassword" className="btn btn-link d-block w-100">
                                        Forget Password
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

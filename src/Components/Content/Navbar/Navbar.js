import React from "react";
import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faBars} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Navbar
                            </h1>
                            <span className="card-header-body-content--description">
                                Daxili səhifələr üçün Navbar
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group required">
                                    <div className="label-group">
                                        <label htmlFor="navbar_logo">Sayt Loqosu</label>
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="navbar_logo_switch"/>
                                            <label className="custom-control-label" htmlFor="navbar_logo_switch"> </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="label-group">
                                        <label htmlFor="navbar_menu">Menyu</label>
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="navbar_menu_switch"/>
                                            <label className="custom-control-label" htmlFor="navbar_menu_switch"> </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="label-group">
                                        <label htmlFor="navbar_lang">Sayt Dilləri</label>
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="navbar_lang_switch"/>
                                            <label className="custom-control-label" htmlFor="navbar_lang_switch"> </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group d-flex">
                                    <button type="submit" className="btn btn-primary ml-auto">
                                        Yadda saxla
                                        <FontAwesomeIcon icon={faTelegramPlane} className="icon ml-2"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

import React from "react";
import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

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
                    navbar
                </div>
            </div>
        </>
    )
}

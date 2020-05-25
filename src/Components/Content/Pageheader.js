import React from "react";
import "./Content.css";
import Logo from "../../logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default function Pageheader() {
    return (
        <>
            <div className="page-header page-header-light">
                <div className="page-header-body">
                    <div className="page-header-body-image">
                        {/*<img src={Logo} alt="image" className="page-header-body-image--img"/>*/}
                        <FontAwesomeIcon icon={faHome} className="icon page-header-body-image--svg"/>
                    </div>
                    <div className="page-header-body-content">
                        <h1 className="page-header-body-content--header">
                            Dashboard
                        </h1>
                        <span className="page-header-body-content--description">
                            The revolution control panel
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

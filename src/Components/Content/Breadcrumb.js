import React from "react";
import "./Content.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumb() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <a href="#" className="breadcrumb-item">
                        <FontAwesomeIcon icon={faHome} className="icon breadcrumb-item--icon"/>
                        Home
                    </a>
                    <li className="breadcrumb-item active" aria-current="page">
                        Dashboard
                    </li>
                </ol>
            </nav>
        </>
    )
}

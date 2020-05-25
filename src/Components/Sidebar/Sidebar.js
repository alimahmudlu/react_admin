import React from "react";
import "./Sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faPager} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return (
        <>
            <div className="sidebar sidebar-dark sidebar-main sidebar-expand-lg">
                <div className="sidebar-content">
                    <div className="card card-sidebar-mobile">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">
                            <li className="nav-item-header d-none">
                                <div className="text-uppercase font-size-xs line-height-xs">Main</div>
                                <i className="icon-menu" title="Main"></i></li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <FontAwesomeIcon icon={faHome} className="icon"/>
                                    <span>
									    Dashboard
								    </span>
                                </a>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a href="#" className="nav-link collapsed" data-toggle="collapse" href="#submenu1" role="button" aria-expanded="false" aria-controls="submenu1">
                                    <FontAwesomeIcon icon={faPager} className="icon"/>
                                    <span>
                                        Layouts
                                    </span>
                                </a>
                                <ul className="nav nav-group-sub collapse" id="submenu1">
                                    <li className="nav-item">
                                        <a href="" className="nav-link">
                                            Default layout
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" className="nav-link">
                                            Default layout
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <FontAwesomeIcon icon={faPager} className="icon"/>
                                    <span>
                                        Changelog
                                    </span>
                                    <span className="badge bg-blue-400 align-self-center ml-auto">2.3</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}

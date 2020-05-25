import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCogs,
    faGlobeAmericas,
    faSignOutAlt,
    faUserEdit
} from '@fortawesome/free-solid-svg-icons';
import Logo from "../../logo.svg";
import Person from "../../person.jpg";
import {Link} from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-dark">
                <div className="navbar-brand">
                    <a href="#" className="d-inline-block">
                        <img src={Logo}/>
                    </a>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="#" onClick={props.toggle} className="navbar-nav-link sidebar-control sidebar-main-toggle">
                            <FontAwesomeIcon icon={faBars} className="icon"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="navbar-nav-link sidebar-control sidebar-main-toggle">
                            <FontAwesomeIcon icon={faGlobeAmericas} className="icon"/>
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown dropdown-user">
                        <a href="#" className="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            <img src={Person} className="rounded-circle mr-2" height="34" alt=""/>
                            <span>Əli Mahmudlu</span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                            <Link to="/profile" className="dropdown-item">
                                <FontAwesomeIcon icon={faUserEdit} className="icon"/>
                                Profilin redaktəsi
                            </Link>
                            <Link to="/settings" className="dropdown-item">
                                <FontAwesomeIcon icon={faCogs} className="icon"/>
                                Əsas tənzimləmələr
                            </Link>
                            <div className="dropdown-divider"> </div>
                            <a href="#" className="dropdown-item">
                                <FontAwesomeIcon icon={faSignOutAlt} className="icon"/>
                                Çıxış
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

import React from "react";
import "./Sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCopy, faHome, faPager, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
    return (
        <>
            <div className="sidebar sidebar-dark sidebar-main sidebar-expand-lg">
                <div className="sidebar-content">
                    <div className="card card-sidebar-mobile">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">
                            <li className="nav-item-header d-none">
                                <div className="text-uppercase font-size-xs line-height-xs">Main</div>
                                <FontAwesomeIcon icon={faFacebook} className="icon"/>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faHome} className="icon"/>
                                    <span>
									    Dashboard
								    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                                    <span>
									    Contact
								    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/navbar" className="nav-link">
                                    <FontAwesomeIcon icon={faBars} className="icon"/>
                                    <span>
									    Navbar
								    </span>
                                </Link>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link collapsed" data-toggle="collapse" href="#post_menu" role="button" aria-expanded="false" aria-controls="post_menu">
                                    <FontAwesomeIcon icon={faCopy} className="icon"/>
                                    <span>
                                        Posts
                                    </span>
                                </a>
                                <ul className="nav nav-group-sub collapse" id="post_menu">
                                    <li className="nav-item">
                                        <Link to="/post" className="nav-link">
                                            Post List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/post/add" className="nav-link">
                                            Add Post
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link collapsed" data-toggle="collapse" href="#pages_menu" role="button" aria-expanded="false" aria-controls="pages_menu">
                                    <FontAwesomeIcon icon={faCopy} className="icon"/>
                                    <span>
                                        Pages
                                    </span>
                                </a>
                                <ul className="nav nav-group-sub collapse" id="pages_menu">
                                    <li className="nav-item">
                                        <Link to="/pages" className="nav-link">
                                            Pages List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/pages/add" className="nav-link">
                                            Add Page
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link collapsed" data-toggle="collapse" href="#category_menu" role="button" aria-expanded="false" aria-controls="category_menu">
                                    <FontAwesomeIcon icon={faCopy} className="icon"/>
                                    <span>
                                        Category
                                    </span>
                                </a>
                                <ul className="nav nav-group-sub collapse" id="category_menu">
                                    <li className="nav-item">
                                        <Link to="/category" className="nav-link">
                                            Category List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/category/add" className="nav-link">
                                            Add Category
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link collapsed" data-toggle="collapse" href="#subscribe_menu" role="button" aria-expanded="false" aria-controls="subscribe_menu">
                                    <FontAwesomeIcon icon={faPager} className="icon"/>
                                    <span>
                                        Subscribe
                                    </span>
                                </a>
                                <ul className="nav nav-group-sub collapse" id="subscribe_menu">
                                    <li className="nav-item">
                                        <Link to="/subscribe" className="nav-link">
                                            Subscribe List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/subscribe_edit" className="nav-link">
                                            Edit Subscribe
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <FontAwesomeIcon icon={faPager} className="icon"/>
                                    <span>
                                        Changelog
                                    </span>
                                    <span className="badge bg-blue-400 align-self-center ml-auto">2.3</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}

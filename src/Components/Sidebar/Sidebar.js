import React from "react";
import "./Sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faBell,
    faCopy,
    faFolder,
    faHome,
    faNewspaper,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function Sidebar(props) {
    const {sidebarClosed} = props;
    return (
        <>
            <div className="sidebar sidebar-dark sidebar-main sidebar-expand-lg">
                <div className="sidebar-content">
                    <div className="card card-sidebar-mobile">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">
                            <li className="nav-item-header d-none">
                                <div className="text-uppercase font-size-xs line-height-xs">Main</div>
                                <FontAwesomeIcon icon={faHome} className="icon"/>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={sidebarClosed}>
                                    <FontAwesomeIcon icon={faHome} className="icon"/>
                                    <span>
									    Dashboard
								    </span>
                                </Link>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link collapsed" data-toggle="collapse" href="#category_menu" role="button" aria-expanded="false" aria-controls="category_menu">
                                    <FontAwesomeIcon icon={faFolder} className="icon"/>
                                    <span>
                                        Category
                                    </span>
                                </a>
                                <ul className="nav nav-group-sub collapse" id="category_menu">
                                    <li className="nav-item">
                                        <Link to="/category" className="nav-link"  onClick={sidebarClosed}>
                                            Category List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/category/add" className="nav-link" onClick={sidebarClosed}>
                                            Add Category
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
                                        <Link to="/pages" className="nav-link" onClick={sidebarClosed}>
                                            Pages List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/pages/add" className="nav-link" onClick={sidebarClosed}>
                                            Add Page
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link collapsed" data-toggle="collapse" href="#post_menu" role="button" aria-expanded="false" aria-controls="post_menu">
                                    <FontAwesomeIcon icon={faNewspaper} className="icon"/>
                                    <span>
                                        Posts
                                    </span>
                                </a>
                                <ul className="nav nav-group-sub collapse" id="post_menu">
                                    <li className="nav-item">
                                        <Link to="/post" className="nav-link" onClick={sidebarClosed}>
                                            Post List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/post/add" className="nav-link" onClick={sidebarClosed}>
                                            Add Post
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/post/category" className="nav-link" onClick={sidebarClosed}>
                                            Post Kateqoiyası Listi
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/post/categoryadd" className="nav-link" onClick={sidebarClosed}>
                                            Post Kateqoiyası əlavə et
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link collapsed" data-toggle="collapse" href="#subscribe_menu" role="button" aria-expanded="false" aria-controls="subscribe_menu">
                                    <FontAwesomeIcon icon={faBell} className="icon"/>
                                    <span>
                                        Subscribe
                                    </span>
                                </a>
                                <ul className="nav nav-group-sub collapse" id="subscribe_menu">
                                    <li className="nav-item">
                                        <Link to="/subscribe" className="nav-link" onClick={sidebarClosed}>
                                            Subscribe List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/subscribe/edit" className="nav-link" onClick={sidebarClosed}>
                                            Edit Subscribe
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" onClick={sidebarClosed}>
                                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                                    <span>
									    Contact
								    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/navbar" className="nav-link" onClick={sidebarClosed}>
                                    <FontAwesomeIcon icon={faBars} className="icon"/>
                                    <span>
									    Navbar
								    </span>
                                </Link>
                            </li>
                            {/*
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <FontAwesomeIcon icon={faPager} className="icon"/>
                                    <span>
                                        Changelog
                                    </span>
                                    <span className="badge bg-blue-400 align-self-center ml-auto">2.3</span>
                                </Link>
                            </li>
                            */}
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}

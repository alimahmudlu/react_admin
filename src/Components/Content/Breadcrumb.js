import React from "react";
import "./Content.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";




export default function Breadcrumb() {

    const pathname = window.location.pathname;
    const arr = pathname.split("/");
    const arr2 = arr.shift();

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <Link to="/" className="breadcrumb-item">
                        <FontAwesomeIcon icon={faHome} className="icon breadcrumb-item--icon"/>
                        Home
                    </Link>
                    {arr.length === 0 ? " aaa" :
                        <>
                            {arr.map((item, index) => {
                                return (
                                    <>
                                        <li className="breadcrumb-item" key={index}>
                                            <Link to={["/",item].join("")}>
                                                {item}
                                            </Link>
                                        </li>
                                    </>
                                )
                            })}
                        </>
                    }
                </ol>
            </nav>
        </>
    )
}




























/*
import React from "react";
import "./Content.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


export default function Breadcrumb(props) {
    const {breadcrumb_childitem, breadcrumb_activeitem} = props;
    return (
        <>
            {/!*<nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <Link to="/" className="breadcrumb-item">
                        <FontAwesomeIcon icon={faHome} className="icon breadcrumb-item--icon"/>
                        Home
                    </Link>
                    {breadcrumb_childitem === "" ? "" :
                        <>
                            {breadcrumb_childitem.map((item) => {
                                return (
                                    <>
                                        <li className="breadcrumb-item" aria-current="page">
                                            <Link to={item.page_link}>
                                                {item.page_name}
                                            </Link>
                                        </li>
                                    </>
                                )
                            })}
                        </>
                    }

                    {breadcrumb_activeitem.length === 0 ? "" :
                        <li className="breadcrumb-item" aria-current="page">
                            {breadcrumb_activeitem}
                        </li>
                    }
                </ol>
            </nav>*!/}
        </>
    )
}
*/

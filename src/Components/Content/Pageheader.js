import React from "react";
import "./Content.css";

export default function Pageheader(props) {
    const {pageheader_icon, pageheader_header, pageheader_description} = props;
    return (
        <>
            <div className="page-header page-header-light">
                <div className="page-header-body">
                    <div className="page-header-body-image">
                        <i className={pageheader_icon}></i>
                    </div>
                    <div className="page-header-body-content">
                        <h1 className="page-header-body-content--header">
                            {pageheader_header}
                        </h1>
                        <span className="page-header-body-content--description">
                            {pageheader_description}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

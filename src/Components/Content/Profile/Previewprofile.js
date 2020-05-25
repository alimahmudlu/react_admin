import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";

export default function Previewprofile() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faEye} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Önizləmə
                            </h1>
                            <span className="card-header-body-content--description">

                                        </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    preview
                </div>
            </div>
        </>
    )
}

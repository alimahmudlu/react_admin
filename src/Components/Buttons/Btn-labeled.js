import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Btn_labeled(props) {
    const {btn_name, btn_icon} = props;
    return (
        <>
            <button type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                <b>
                    <FontAwesomeIcon icon={btn_icon} className="icon"/>
                </b>
                {btn_name}
            </button>
        </>
    )
}

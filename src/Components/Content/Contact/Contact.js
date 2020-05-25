import React from "react";
import "./Contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faAddressBook} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Contact
                            </h1>
                            <span className="card-header-body-content--description">
                                Contact
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="menuheader">Menyu Başlığı</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="menuheader_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="menuheader_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="name" className="form-control" id="menuheader" placeholder="Menyu Başlığı" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="sectionheader">Bölmə Başlığı</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="sectionheader_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="sectionheader_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="name" className="form-control" id="sectionheader" placeholder="Bölmə Başlığı" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="sectiondescription">Bölmə Təsviri</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="sectiondescription_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="sectiondescription_switch"> </label>*/}
                                </div>
                            </div>
                            <textarea className="form-control" id="sectiondescription" placeholder="Bölmə Təsviri" required> </textarea>
                        </div>
                        <div className="form-group d-flex">
                            <button type="submit" className="btn btn-primary ml-auto">
                                Yadda saxla
                                <FontAwesomeIcon icon={faTelegramPlane} className="icon ml-2"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

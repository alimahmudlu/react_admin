import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faUserCog} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";

export default function Owndetails() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faUserCog} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Şəxsi Məlumatlar
                            </h1>
                            <span className="card-header-body-content--description">
                                        Vacib sahələr doldurulmalıdır
                                    </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form className="needs-validation" noValidate>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="fullname">Ad, Soyad</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                    {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="text" className="form-control" id="fullname" placeholder="Ad Soyad"
                                   pattern="{a-z}" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="birtday">Doğum tarixi</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input"
                                           id="birtday_switch"/>
                                    <label className="custom-control-label"
                                           htmlFor="birtday_switch"> </label>
                                </div>
                            </div>
                            <input type="date" className="form-control" id="birtday" placeholder=""
                                   required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="homeaddress">Ev adresi</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input"
                                           id="homeaddress_switch"/>
                                    <label className="custom-control-label"
                                           htmlFor="homeaddress_switch"> </label>
                                </div>
                            </div>
                            <input type="address" className="form-control" id="homeaddress"
                                   placeholder="Ev adresi" required/>
                        </div>
                        <div className="form-group">
                            <div className="label-group">
                                <label htmlFor="workaddress">İş adresi</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input"
                                           id="workaddress_switch"/>
                                    <label className="custom-control-label"
                                           htmlFor="workaddress_switch"> </label>
                                </div>
                            </div>
                            <input type="address" className="form-control" id="workaddress"
                                   placeholder="İş adresi"/>
                        </div>
                        <div className="form-group d-flex">
                            <button type="reset" className="btn btn-danger ml-auto">
                                İmtina
                                <FontAwesomeIcon icon={faTimes} className="icon ml-2"/>
                            </button>
                            <button type="submit" className="btn btn-info ml-auto">
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

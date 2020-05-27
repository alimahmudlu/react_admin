import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

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
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">Ad, Soyad</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    Əli Mahmudlu
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">Doğum tarixi</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    1996.14.12
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">Ev adresi</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    Asif Məhərrəmov küçəsi, 26/28, Nəsimi rayon, Bakı şəhəri
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">İş adresi</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    Luksen Plaza, Xətai küçəsi, Bakı şəhəri
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">E-mail</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    alimahmudlu@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">Telefon</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    0708550235
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">Facebook</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    <Link to="#">
                                        www.facebook.com/alimahmudlu
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">Instagram</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    <Link to="#">
                                        www.instagram.com/alimahmudlu
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">Youtube</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    <Link to="#">
                                        www.youtube.com/alimahmudlu
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">Linkedin</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    <Link to="#">
                                        www.linkedin.com/alimahmudlu
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="fullname">Twitter</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                    </div>
                                </div>
                                <p className="label-header">
                                    <Link to="#">
                                        www.twitter.com/alimahmudlu
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

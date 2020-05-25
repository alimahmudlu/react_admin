import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {Route} from "react-router-dom";

export default function Contactdetails() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faPhone} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Əlaqə Məlumatları
                            </h1>
                            <span className="card-header-body-content--description">
                                            Vacib sahələr doldurulmalıdır
                                        </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form className="needs-validation" noValidate>
                        <div className="form-group">
                            <div className="label-group">
                                <label htmlFor="email">Email</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="email_switch"  />
                                    <label className="custom-control-label" htmlFor="email_switch"> </label>
                                </div>
                            </div>
                            <input type="email" className="form-control" id="email" placeholder="Email" pattern="{a-z}"/>
                        </div>
                        <div className="form-group">
                            <div className="label-group">
                                <label htmlFor="phone">Telefon</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="phone_switch"  />
                                    <label className="custom-control-label" htmlFor="phone_switch"> </label>
                                </div>
                            </div>
                            <input type="email" className="form-control" id="phone" placeholder="Telefon" pattern="{a-z}"/>
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
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faFacebook} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Sosial Media Məlumatları
                            </h1>
                            <span className="card-header-body-content--description">
                                            Vacib sahələr doldurulmalıdır
                                        </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form className="needs-validation" noValidate>
                        <div className="form-group">
                            <div className="label-group">
                                <label htmlFor="facebook">Facebook</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="facebook_switch"  />
                                    <label className="custom-control-label" htmlFor="facebook_switch"> </label>
                                </div>
                            </div>
                            <input type="email" className="form-control" id="facebook" placeholder="Facebook"/>
                        </div>
                        <div className="form-group">
                            <div className="label-group">
                                <label htmlFor="instagram">Instagram</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="instagram_switch"  />
                                    <label className="custom-control-label" htmlFor="instagram_switch"> </label>
                                </div>
                            </div>
                            <input type="email" className="form-control" id="instagram" placeholder="Instagram"/>
                        </div>
                        <div className="form-group">
                            <div className="label-group">
                                <label htmlFor="youtube">Youtube</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="youtube_switch"  />
                                    <label className="custom-control-label" htmlFor="youtube_switch"> </label>
                                </div>
                            </div>
                            <input type="youtube" className="form-control" id="youtube" placeholder="Youtube"/>
                        </div>
                        <div className="form-group">
                            <div className="label-group">
                                <label htmlFor="linkedin">Linkedin</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="linkedin_switch"  />
                                    <label className="custom-control-label" htmlFor="linkedin_switch"> </label>
                                </div>
                            </div>
                            <input type="youtube" className="form-control" id="linkedin" placeholder="Linkedin"/>
                        </div>
                        <div className="form-group">
                            <div className="label-group">
                                <label htmlFor="twitter">Twitter</label>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="twitter_switch"  />
                                    <label className="custom-control-label" htmlFor="twitter_switch"> </label>
                                </div>
                            </div>
                            <input type="youtube" className="form-control" id="twitter" placeholder="Twitter"/>
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

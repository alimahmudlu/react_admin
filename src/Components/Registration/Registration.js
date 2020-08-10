import React from "react";
import "./Registration.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt,
    faClipboardList,
    faUnlockAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import one from "../../1.png";
import two from "../../2.png";
import there from "../../3.png";

export default function Registration() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="vertical-center horizontal-center d-flex min-vh-100">
                <div className="registration-page">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header-body">
                                <div className="card-header-body-image">
                                    <FontAwesomeIcon icon={faClipboardList} className="icon card-header-body-image--svg"/>
                                </div>
                                <div className="card-header-body-content">
                                    <h1 className="card-header-body-content--header">
                                        Registation
                                    </h1>
                                    {/*<span className="card-header-body-content--description">*/}
                                    {/*    Adminpanelə giriş*/}
                                    {/*</span>*/}
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-6 mt-3 mb-3">
                                <div className="card-body">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="box pt-75">
                                                <div className="box_resize">
                                                    <img src={one} className="slider--img" alt="slider_img"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="box pt-75">
                                                <div className="box_resize">
                                                    <img src={two} className="slider--img" alt="slider_img"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="box pt-75">
                                                <div className="box_resize">
                                                    <img src={there} className="slider--img" alt="slider_img"/>
                                                </div>
                                            </div>
                                        </div>

                                    </Slider>
                                </div>
                            </div>
                            <div className="col-lg-6 border-left mt-3 mb-3">
                                <form className="registration-form">
                                    <div className="card-body">
                                        <div className="form-group form-group-feedback form-group-feedback-left">
                                            <input type="text" className="form-control" placeholder="Ad, Soyad" />
                                            <div className="form-control-feedback">
                                                <FontAwesomeIcon icon={faUser} className="icon text-muted"/>
                                            </div>
                                        </div>
                                        <div className="form-group form-group-feedback form-group-feedback-left">
                                            <input type="text" className="form-control" placeholder="Username" />
                                            <div className="form-control-feedback">
                                                <FontAwesomeIcon icon={faUser} className="icon text-muted"/>
                                            </div>
                                        </div>
                                        <div className="form-group form-group-feedback form-group-feedback-left">
                                            <input type="text" className="form-control" placeholder="Email" />
                                            <div className="form-control-feedback">
                                                <FontAwesomeIcon icon={faAt} className="icon text-muted"/>
                                            </div>
                                        </div>
                                        <div className="form-group form-group-feedback form-group-feedback-left">
                                            <input type="password" className="form-control" placeholder="Password" />
                                            <div className="form-control-feedback">
                                                <FontAwesomeIcon icon={faUnlockAlt} className="icon text-muted"/>
                                            </div>
                                        </div>
                                        <div className="form-group form-group-feedback form-group-feedback-left">
                                            <input type="password" className="form-control" placeholder="Re Password" />
                                            <div className="form-control-feedback">
                                                <FontAwesomeIcon icon={faUnlockAlt} className="icon text-muted"/>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <button className="btn btn-primary d-block w-100">
                                                Registration
                                                {/*<FontAwesomeIcon icon={faChevronRight} className="icon ml-2"/>*/}
                                            </button>
                                        </div>
                                        <div className="form-group">
                                            <div className="assistant">
                                                <span className="assistant_text">
                                                    Do you already have an account
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <Link to="/login" className="btn btn-primary d-block w-100">
                                                Log in
                                                {/*<FontAwesomeIcon icon={faChevronRight} className="icon ml-2"/>*/}
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

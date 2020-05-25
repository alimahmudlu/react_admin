import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";

export default function Primarydetails() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Əsas Məlumatlar
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
                                <label htmlFor="username">İstifadəçi adı</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="username_switch"  />*/}
                                    {/*<label className="custom-control-label" htmlFor="username_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="text" className="form-control" id="username" placeholder="İstifadəçi adı" pattern="{a-z}" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="password">Yeni Parol</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="password_switch"  />*/}
                                    {/*<label className="custom-control-label" htmlFor="password_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="password" className="form-control" id="password" placeholder="Yeni Parol" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="password_repeat">Yeni Parolun təkrarı</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="password_repeat_switch"  />*/}
                                    {/*<label className="custom-control-label" htmlFor="password_repeat_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="password" className="form-control" id="password_repeat" placeholder="Yeni Parolun təkrarı" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="user_group">İstifadəçi qrupunu seçin</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="user_group_switch"  />*/}
                                    {/*<label className="custom-control-label" htmlFor="user_group_switch"> </label>*/}
                                </div>
                            </div>
                            <select className="form-control custom-select" id="user_group" required>
                                <option value="admin">admin</option>
                                <option value="moderator">moderator</option>
                            </select>
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

import React from "react";
import "./User.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faPhone, faUserCog} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";

export default function Newuser() {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-lg-6">
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
                                Vacib sahələr doldurulmalıdır.
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
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
                                        <label htmlFor="password">Parol</label>
                                        <div className="custom-control custom-switch">
                                            {/*<input type="checkbox" className="custom-control-input" id="password_switch"  />*/}
                                            {/*<label className="custom-control-label" htmlFor="password_switch"> </label>*/}
                                        </div>
                                    </div>
                                    <input type="password" className="form-control" id="password" placeholder="Yeni Parol" required/>
                                </div>
                                <div className="form-group required">
                                    <div className="label-group">
                                        <label htmlFor="password_repeat">Parolun təkrarı</label>
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
                            </div>
                        </div>
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
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group d-flex mb-0">
                                    <button type="submit" className="btn btn-primary ml-auto">
                                        Əlavə et
                                        <FontAwesomeIcon icon={faTelegramPlane} className="icon ml-2"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

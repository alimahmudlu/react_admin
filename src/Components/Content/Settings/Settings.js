import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import Pageheader from "../Pageheader";
import Breadcrumb from "../Breadcrumb";
import {Helmet} from "react-helmet";


export default function Settings() {
    return (
        <>
            <Helmet>
                <title>Tənzimləmələr | Admin Panel</title>
            </Helmet>
            <Pageheader
                pageheader_header="Saytın əsas tənzimləmələri"
                pageheader_description="Burdan saytın bütün tənzimləmələrini edə bilərsiniz"
                pageheader_icon="fas fa-cogs"
            />
            <Breadcrumb/>
            <div className="content">
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
                        <form>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sitepath">Saytın linki</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sitepath_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="sitepath_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="url" className="form-control" id="sitepath" placeholder="Saytın linki" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="siteadminpanelpath">Admin Panel linki</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="siteadminpanelpath_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="siteadminpanelpath_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="url" className="form-control" id="siteadminpanelpath" placeholder="Admin Panel linki" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="multilang">Multi lang</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="multilangswitch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="multilang_switch"> </label>*/}
                                    </div>
                                </div>
                                <select className="form-control custom-select" id="multilang" required>
                                    <option value="on">Aktiv</option>
                                    <option value="off">Deaktiv</option>
                                </select>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="siteprimarylang">Saytın əsas dili</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="siteprimarylang_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="siteprimarylang_switch"> </label>*/}
                                    </div>
                                </div>
                                <select className="form-control custom-select" id="siteprimarylang" required>
                                    <option value="az">azərbaycan</option>
                                    <option value="en">ingilis</option>
                                </select>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="siteemail">Saytın Emaili</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="siteemail_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="siteemail_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="email" className="form-control" id="siteemail" placeholder="Admin Panel linki" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="underconstruction">Under construction</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="siteprimarylang_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="siteprimarylang_switch"> </label>*/}
                                    </div>
                                </div>
                                <select className="form-control custom-select" id="underconstruction" required>
                                    <option value="on">Aktiv</option>
                                    <option value="off">Deaktiv</option>
                                </select>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sitename">Saytın Adı</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sitename_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="sitename_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="text" className="form-control" id="sitename" placeholder="Saytın adı" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sitecolor">Saytın Əsas Rəngi</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sitecolor_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="sitecolor_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="color" className="form-control" id="sitecolor" placeholder="Saytın Əsas Rəngi" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sitethemecolor">Saytın Tema Rəngi</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sitethemecolor_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="sitethemecolor_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="color" className="form-control" id="sitethemecolor" placeholder="Saytın Tema Rəngi" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sitethemecolor">Saytın Təsviri</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sitethemecolor_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="sitethemecolor_switch"> </label>*/}
                                    </div>
                                </div>
                                <textarea className="form-control" id="sitethemecolor" placeholder="Saytın Təsviri" required> </textarea>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="siteauthor">Saytın Müəllifi</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="siteauthor_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="siteauthor_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="name" className="form-control" id="siteauthor" placeholder="Saytın Müəllifi" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sitecopyright">Saytın Müəllif Hüquqları</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sitecopyright_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="sitecopyright_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="name" className="form-control" id="sitecopyright" placeholder="Saytın Müəllif Hüquqları" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sitecopyrightdescription">Müəllif Hüquqları Təsviri </label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sitecopyrightdescription_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="sitecopyrightdescription_switch"> </label>*/}
                                    </div>
                                </div>
                                <textarea className="form-control" id="sitecopyrightdescription" placeholder="Müəllif Hüquqları Təsviri" required> </textarea>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sitelogo">Sayt Loqosu</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sitelogo_switch"  />*/}
                                        {/*<label className="custom-control-label" htmlFor="sitelogo_switch"> </label>*/}
                                    </div>
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="sitelogo" required />
                                    <label className="custom-file-label" htmlFor="sitelogo">Sayt Loqosunu seçin...</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="site-facebook">Facebook</label>
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="site-facebook_switch"  />
                                        <label className="custom-control-label" htmlFor="site-facebook_switch"> </label>
                                    </div>
                                </div>
                                <input type="url" className="form-control" id="site-facebook" placeholder="Facebook"/>
                            </div>
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="site-instagram">Instagram</label>
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="site-instagram_switch"  />
                                        <label className="custom-control-label" htmlFor="site-instagram_switch"> </label>
                                    </div>
                                </div>
                                <input type="url" className="form-control" id="site-instagram" placeholder="Instagram"/>
                            </div>
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="site-twitter">Twitter</label>
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="site-twitter_switch"  />
                                        <label className="custom-control-label" htmlFor="site-twitter_switch"> </label>
                                    </div>
                                </div>
                                <input type="url" className="form-control" id="site-twitter" placeholder="Twitter"/>
                            </div>
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="site-youtube">Youtube</label>
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="site-youtube_switch"  />
                                        <label className="custom-control-label" htmlFor="site-youtube_switch"> </label>
                                    </div>
                                </div>
                                <input type="url" className="form-control" id="site-youtube" placeholder="Youtube"/>
                            </div>
                            <div className="form-group">
                                <div className="label-group">
                                    <label htmlFor="site-linkedin">Linkedin</label>
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="site-linkedin_switch"  />
                                        <label className="custom-control-label" htmlFor="site-linkedin_switch"> </label>
                                    </div>
                                </div>
                                <input type="url" className="form-control" id="site-linkedin" placeholder="Linkedin"/>
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
            </div>
        </>
    )
}

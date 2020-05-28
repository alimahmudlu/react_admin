import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faList, faTimes} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import Pageheader from "../../Pageheader";
import Breadcrumb from "../../Breadcrumb";

export default function PostCategoryEdit() {
    return (
        <>
            <Pageheader
                pageheader_header="Post kateqoriyasını tənzimlə"
                pageheader_description="Post kateqoriyasını tənzimlərkən diqqətli olun. Etdiyiniz səhv post strukturunu poza bilər!"
                pageheader_icon="fas fa-file-alt"
            />
            <Breadcrumb/>
            <div className="content">
                <div className="button-group mb-2">
                    <Link to="/pages/category" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                        <b>
                            <FontAwesomeIcon icon={faList} className="icon"/>
                        </b>
                        Post Kateqoriyası listinə bax
                    </Link>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-body">
                            <div className="card-header-body-image">
                                <FontAwesomeIcon icon={faExclamationTriangle} className="icon card-header-body-image--svg"/>
                            </div>
                            <div className="card-header-body-content">
                                <h1 className="card-header-body-content--header">
                                    Əsas məlumatlar
                                </h1>
                                <span className="card-header-body-content--description">
                                    Vacib sahələr doldurulmalıdır
                                </span>
                            </div>
                            <div className="card-header-body-footer">
                                <div className="custom-control custom-switch custom-switch-big">
                                    <input type="checkbox" className="custom-control-input" id="postcategory_visible"/>
                                    <label className="custom-control-label" htmlFor="postcategory_visible"> </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="postcategory_select">Səhifə seçin</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="postcategory_select_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="postcategory_select_switch"> </label>*/}
                                </div>
                            </div>
                            <select className="form-control custom-select" id="postcategory_select" required>
                                <option value="0">Səhifə seçin</option>
                                <option value="1">sehife1</option>
                                <option value="2">sehife2</option>
                            </select>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="postcategory_name">Post Kateqoriyasının adı</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="postcategory_name_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="postcategory_name_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="name" className="form-control" id="postcategory_name" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="postcategory_slug">Post Kateqoriyasının sluqu</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="postcategory_slug_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="postcategory_slug_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="name" className="form-control" id="postcategory_slug" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="postcategory_color">Post Kateqoriyasının rəngi</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="postcategory_color_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="postcategory_color_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="color" className="form-control" id="postcategory_color" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="postcategory_icon">Post Kateqoriyasının ikonu</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="postcategory_icon_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="postcategory_icon_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="name" className="form-control" id="postcategory_icon" required/>
                        </div>
                        <div className="form-group d-flex ">
                            <button type="submit" className="btn btn-danger ml-auto">
                                İmtina
                                <FontAwesomeIcon icon={faTimes} className="icon ml-2"/>
                            </button>
                            <button type="submit" className="btn btn-info ml-auto">
                                Yadda saxla
                                <FontAwesomeIcon icon={faTelegramPlane} className="icon ml-2"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

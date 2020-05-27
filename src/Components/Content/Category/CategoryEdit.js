import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faExclamationTriangle,faFolderOpen,faList,
} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import Pageheader from "../Pageheader";
import Breadcrumb from "../Breadcrumb";

export default function CategoryEdit() {
    return (
        <>
            <Pageheader
                pageheader_header="Kateqoriyanı tənzimlə"
                pageheader_description="Kateqoriya tənzimlərkən diqqətli olun. Etdiyiniz səhv səhifə strukturunu poza bilər!"
                pageheader_icon="fas fa-folder"
            />
            <Breadcrumb/>
            <div className="content">
                <div className="button-group mb-2">
                    <Link to="/category/" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                        <b>
                            <FontAwesomeIcon icon={faList} className="icon"/>
                        </b>
                        Kateqoriyalar listinə bax
                    </Link>
                </div>
                <form>
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
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="categroy_name">Kateqoriyanın adı</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="categroy_name_switch"/>*/}
                                        {/*<label className="custom-control-label" htmlFor="categroy_name_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="name" className="form-control" id="categroy_name" placeholder="Kateqoriyanın adı" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="categroy_slug">Kateqoriyanın sluqu</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="categroy_slug_switch"/>*/}
                                        {/*<label className="custom-control-label" htmlFor="categroy_slug_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="name" className="form-control" id="categroy_slug" placeholder="Kateqoriyanın sluqu" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="categroy_color">Kateqoriyanın rəngi</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="categroy_color_switch"/>*/}
                                        {/*<label className="custom-control-label" htmlFor="categroy_color_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="color" className="form-control" id="categroy_color" placeholder="Kateqoriyanın rəngi" required/>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <div className="card-header-body">
                                <div className="card-header-body-image">
                                    <FontAwesomeIcon icon={faFolderOpen} className="icon card-header-body-image--svg"/>
                                </div>
                                <div className="card-header-body-content">
                                    <h1 className="card-header-body-content--header">
                                        Kateqoriya strukturu
                                    </h1>
                                    <span className="card-header-body-content--description">
                                Bu kateqoriyada olan səhifələrin post strukturunu qurun
                            </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="form-group required">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-name" required checked/>
                                    <label className="custom-control-label" htmlFor="cat_post-name">Post adı</label>
                                </div>
                            </div>
                            <div className="form-group required">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-category" required checked/>
                                    <label className="custom-control-label" htmlFor="cat_post-category">Post kateqoriyası</label>
                                </div>
                            </div>
                            <div className="form-group required">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-short_description" required checked/>
                                    <label className="custom-control-label" htmlFor="cat_post-short_description">Postun qısa Təsviri</label>
                                </div>
                            </div>
                            <div className="form-group required">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-description" required checked/>
                                    <label className="custom-control-label" htmlFor="cat_post-description">Post Təsviri</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-gallery"/>
                                    <label className="custom-control-label" htmlFor="cat_post-gallery">Post Qalereyası</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-video"/>
                                    <label className="custom-control-label" htmlFor="cat_post-video">Post Videosu</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-icon"/>
                                    <label className="custom-control-label" htmlFor="cat_post-icon">Post İkonu</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-social_icon_share"/>
                                    <label className="custom-control-label" htmlFor="cat_post-social_icon_share">Sosial şəbəkə ikonları (Paylaş)</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-site_link_btn"/>
                                    <label className="custom-control-label" htmlFor="cat_post-site_link_btn">`Sayta keçid` düyməsi</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cat_post-site_live_demo"/>
                                    <label className="custom-control-label" htmlFor="cat_post-site_live_demo">`Canlı Görüntüləmə` düyməsi</label>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </form>
            </div>
        </>
    )
}

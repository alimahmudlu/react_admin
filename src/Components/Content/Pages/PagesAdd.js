import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faList, faTimes} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import jsona from "../category";
import Pageheader from "../Pageheader";
import Breadcrumb from "../Breadcrumb";


export default function PagesAdd() {
    const [pagecategory, setPagecategory] = useState("category1");

    function lol(event) {
        setPagecategory(event.target.value);
        console.log(pagecategory)
    }

    return (
        <>
            <Pageheader
                pageheader_header="Səhifə əlavə et"
                pageheader_description="Səhifə əlavə edərkən diqqətli olun. Etdiyiniz səhv post strukturunu poza bilər!"
                pageheader_icon="fas fa-copy"
            />
            <Breadcrumb/>
            <div className="content">
                <div className="button-group mb-2">
                    <Link to="/pages/" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                        <b>
                            <FontAwesomeIcon icon={faList} className="icon"/>
                        </b>
                        Səhifələrin listinə bax
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
                                    Əsas Məlumatlar
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
                                <label htmlFor="category_select">Kateqoriya</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="category_select_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="category_select_switch"> </label>*/}
                                </div>
                            </div>
                            <select className="form-control custom-select" id="category_select" defaultValue={pagecategory} required onChange={lol} placeholder="salam">
                                {jsona.map((item) => {
                                    return (
                                        <option value={item.category_slug}>{item.category_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="page_name">Səhifənin adı</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="page_name_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="page_name_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="text" className="form-control" id="page_name" placeholder="Səhifənin adı" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="page_slug">Səhifənin sluqu</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="page_slug_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="page_slug_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="text" className="form-control" id="page_slug" placeholder="Səhifənin sluqu" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="menuheader">Səhifənin Menyu Başlığı</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="menuheader_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="menuheader_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="name" className="form-control" id="page_menuheader" placeholder="Səhifənin Menyu Başlığı" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="sectionheader">Səhifənin Bölmə Başlığı</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="sectionheader_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="sectionheader_switch"> </label>*/}
                                </div>
                            </div>
                            <input type="name" className="form-control" id="page_sectionheader" placeholder="Səhifənin Bölmə Başlığı" required/>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="page_header">Səhifənin başlığı</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="page_header_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="page_header_switch"> </label>*/}
                                </div>
                            </div>
                            <select className="form-control custom-select" id="page_header" required>
                                <option value="none">Başlıqsız</option>
                                <option value="homepage">Əsas səhifədə</option>
                                <option value="internalpage">Daxili səhifədə</option>
                                <option value="bothpage">Hər iki səhifədə</option>
                            </select>
                        </div>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="page_menu_location">Səhifənin menyuda yeri</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="page_menu_location_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="page_menu_location_switch"> </label>*/}
                                </div>
                            </div>
                            <select className="form-control custom-select" id="page_menu_location" required>
                                <option value="Sidebar">Saydbar</option>
                                <option value="Navbar">Navbar</option>
                                <option value="bothbar">Hər ikisində</option>
                            </select>
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
                    </div>
                </div>
            </div>
        </>
    )
}

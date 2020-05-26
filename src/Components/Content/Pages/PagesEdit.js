import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faCopy, faPlus} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";

export default function PagesEdit() {
    return (
        <>
            <div className="button-group mb-2">
                <Link to="/pages/add" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                    <b>
                        <FontAwesomeIcon icon={faPlus} className="icon"/>
                    </b>
                    Yeni səhifə əlavə et
                </Link>
                <Link to="/pages/" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                    <b>
                        <FontAwesomeIcon icon={faCopy} className="icon"/>
                    </b>
                    Səhifələrin listinə bax
                </Link>
            </div>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faAddressBook} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Səhifələr
                            </h1>
                            <span className="card-header-body-content--description">
                                Səhifələr
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="category_select">Kateqoriya</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="category_select_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="category_select_switch"> </label>*/}
                                </div>
                            </div>
                            <select className="form-control custom-select" id="category_select" required>
                                <option value="1">category1</option>
                                <option value="2">category2</option>
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
                            <input type="text" className="form-control" id="page_slug" placeholder="Səhifənin sluqu" required readOnly/>
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

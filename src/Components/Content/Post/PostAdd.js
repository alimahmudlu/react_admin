import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle,faList,faTimes} from "@fortawesome/free-solid-svg-icons";
import pagelist from "../pagelist";
import {
    cat_postcategory,
    cat_postdescription, cat_postgallery, cat_posticon,
    cat_postname,
    cat_postshortdescription, cat_postsitelinkbtn, cat_postsitelivedemo, cat_postsocialiconshare, cat_postvideo
} from "../Category/Rendercategory";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import Pageheader from "../Pageheader";
import Breadcrumb from "../Breadcrumb";


export default function PostAdd() {
    const [pagecategory, setPagecategory] = useState("");

    function lol(event) {
        setPagecategory(event.target.value);
        console.log(pagecategory)
    }
    return (
        <>
            <Pageheader
                pageheader_header="Post əlavə et"
                pageheader_description="Post əlavə edərkən diqqətli olun. Etdiyiniz səhv sayt strukturunu poza bilər!"
                pageheader_icon="fas fa-newspaper"
            />
            <Breadcrumb/>
            <div className="content">
                <div className="button-group mb-2">
                    <Link to="/post/" type="button" className="btn btn-labeled btn-labeled-left btn-success mr-2 mb-1">
                        <b>
                            <FontAwesomeIcon icon={faList} className="icon"/>
                        </b>
                        Postların listinə bax
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
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="category_select">Səhifə seçin</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="category_select_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="category_select_switch"> </label>*/}
                                </div>
                            </div>
                            <select className="form-control custom-select" id="category_select" defaultValue={pagecategory} required onChange={lol} placeholder="salam">
                                <option value="0">Səhifə seçin</option>
                                {pagelist.map((item) => {
                                    return (
                                        <option value={item.page_slug}>{item.page_name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {pagelist.filter(function (item) { return item.page_slug === pagecategory; }).map((item, index) => {
                            return (
                                <>
                                    {item.category_components.map((item) => {
                                        return (
                                            <>
                                                {item["cat_post-name"] === "true" && cat_postname()}
                                                {item["cat_post-category"] === "true" && cat_postcategory()}
                                                {item["cat_post-short_description"] === "true" && cat_postshortdescription()}
                                                {item["cat_post-description"] === "true" && cat_postdescription()}
                                                {item["cat_post-icon"] === "true" && cat_posticon()}
                                                {item["cat_post-social_icon_share"] === "true" && cat_postsocialiconshare()}
                                                {item["cat_post-site_link_btn"] === "true" && cat_postsitelinkbtn()}
                                                {item["cat_post-site_live_demo"] === "true" && cat_postsitelivedemo()}
                                            </>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div>
                </div>
                {pagelist.filter(function (item) { return item.page_slug === pagecategory; }).map((item, index) => {
                    return (
                        <>
                            {item.category_components.map((item) => {
                                return (
                                    <>
                                        {item["cat_post-video"] === "true" && cat_postvideo()}
                                        {item["cat_post-gallery"] === "true" && cat_postgallery()}
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="form-group d-flex mb-0">
                                                    <button type="submit" className="btn btn-danger ml-auto">
                                                        İmtina
                                                        <FontAwesomeIcon icon={faTimes} className="icon ml-2"/>
                                                    </button>
                                                    <button type="submit" className="btn btn-info ml-auto">
                                                        Əlavə et
                                                        <FontAwesomeIcon icon={faTelegramPlane} className="icon ml-2"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </>
                    )
                })}
            </div>
        </>
    )
}

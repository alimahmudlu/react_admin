import React from "react";

export default function cat_postsitelinkbtn() {
    return (
        <>
            <div className="form-group required">
                <div className="label-group">
                    <label htmlFor="pg_cat_post-site_link_btn">Sayta keçid</label>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="pg_cat_post-site_link_btn_switch"/>
                        <label className="custom-control-label" htmlFor="pg_cat_post-site_link_btn_switch"> </label>
                    </div>
                </div>
                <input type="url" className="form-control" id="pg_cat_post-site_link_btn" placeholder="Sayta keçid linki" required/>
            </div>
        </>
    )
}

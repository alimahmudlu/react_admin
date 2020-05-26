import React from "react";

export default function cat_postsitelivedemo() {
    return (
        <>
            <div className="form-group required">
                <div className="label-group">
                    <label htmlFor="pg_cat_post-site_live_demo">Canlı Görüntüləmə</label>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="pg_cat_post-site_live_demo_switch"/>
                        <label className="custom-control-label" htmlFor="pg_cat_post-site_live_demo_switch"> </label>
                    </div>
                </div>
                <input type="url" className="form-control" id="pg_cat_post-site_live_demo" placeholder="Canlı Görüntüləmə linki" required/>
            </div>
        </>
    )
}

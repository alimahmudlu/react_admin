import React from "react";

export default function cat_postsocialiconshare() {
    return (
        <>
            <div className="form-group required">
                <div className="label-group">
                    <label htmlFor="pg_cat_post-social_icon_share">Sosial şəbəkə ikonları (paylaş)</label>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="pg_cat_post-social_icon_share_switch"/>
                        <label className="custom-control-label" htmlFor="pg_cat_post-social_icon_share_switch"> </label>
                    </div>
                </div>
                <input type="name" className="form-control" id="cat_post-social_icon_share" placeholder="Sosial şəbəkə ikonları (paylaş)" required/>
            </div>
        </>
    )
}

import React from "react";

export default function cat_postname() {
    return (
        <>
            <div className="form-group required">
                <div className="label-group">
                    <label htmlFor="pg_cat_post-name">Post adı</label>
                    <div className="custom-control custom-switch">
                        {/*<input type="checkbox" className="custom-control-input" id="pg_cat_post-name_switch"/>*/}
                        {/*<label className="custom-control-label" htmlFor="pg_cat_post-name_switch"> </label>*/}
                    </div>
                </div>
                <input type="name" className="form-control" id="pg_cat_post-name" placeholder="Post adı" required/>
            </div>
        </>
    )
}

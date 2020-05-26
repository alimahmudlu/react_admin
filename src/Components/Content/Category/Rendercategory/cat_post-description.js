import React from "react";

export default function cat_postdescription() {
    return (
        <>
            <div className="form-group required">
                <div className="label-group">
                    <label htmlFor="pg_cat_post-description">Postun təsviri</label>
                    <div className="custom-control custom-switch">
                        {/*<input type="checkbox" className="custom-control-input" id="pg_cat_post-description_switch"/>*/}
                        {/*<label className="custom-control-label" htmlFor="pg_cat_post-description_switch"> </label>*/}
                    </div>
                </div>
                <input type="name" className="form-control" id="pg_cat_post-description" placeholder="Postun təsviri" required/>
            </div>
        </>
    )
}

import React from "react";

export default function cat_postcategory() {
    return (
        <>
            <div className="form-group required">
                <div className="label-group">
                    <label htmlFor="pg_cat_post-category">Post kateqoriyası</label>
                    <div className="custom-control custom-switch">
                        {/*<input type="checkbox" className="custom-control-input" id="pg_cat_post-category_switch"/>*/}
                        {/*<label className="custom-control-label" htmlFor="pg_cat_post-category_switch"> </label>*/}
                    </div>
                </div>
                <select className="form-control" id="pg_cat_post-category" placeholder="Post kateqoriyası" required>
                    <option value="0">Secin</option>
                    <option value="1">film</option>
                </select>
            </div>
        </>
    )
}

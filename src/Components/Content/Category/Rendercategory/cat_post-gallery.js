import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImages} from "@fortawesome/free-solid-svg-icons";


import Dragula from 'react-dragula';

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import "./dropzone.css"



const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
    const dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = { };
            Dragula([componentBackingInstance], options);
        }
    };
    return (
        <div>

            <div className="dropzone-preview-div" ref={dragulaDecorator}>
                {previews}
            </div>

            <div {...dropzoneProps}>
                {files.length < maxFiles && input}
            </div>

            {files.length > 0 && submitButton}
        </div>
    )
}

const CustomLayout = () => {
    const getUploadParams = () => ({ url: 'https://httpbin.org/post' })

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            LayoutComponent={Layout}
            onSubmit={handleSubmit}
            inputContent={(files, extra) => (extra.reject ? 'Ancaq şəkil (şəkillər) seçin ' : 'Şəkil (şəkillər) seçin')}
            accept="image/*"
        />
    )
}


export default function cat_postgallery() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faImages} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Qalereya
                            </h1>
                            <span className="card-header-body-content--description">
                                Qalereyaya şəkil əlavə etmək üçün şəkilləri seçin
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group required dropzone-group">
                        <CustomLayout/>
                    </div>
                </div>
            </div>
        </>
    )
}



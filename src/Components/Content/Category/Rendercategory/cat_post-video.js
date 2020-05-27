import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";


import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import "./dropzone.css"


const VideoDropzone = () => {
    const getUploadParams = () => ({ url: 'https://httpbin.org/post' })

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            // LayoutComponent={Layout}
            onSubmit={handleSubmit}
            maxFiles={1}
            multiple={false}
            inputContent={(files, extra) => (extra.reject ? 'Ancaq video seçin ' : 'Video seçin')}
            inputWithFilesContent={(files, extra) => (extra.reject ? 'Ancaq video seçin ' : 'Video seçin')}
            accept="video/*"
        />
    )
}
const ImageDropzone = () => {
    const getUploadParams = () => ({ url: 'https://httpbin.org/post' })

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            // LayoutComponent={Layout}
            onSubmit={handleSubmit}
            maxFiles={1}
            multiple={false}
            inputContent={(files, extra) => (extra.reject ? 'Ancaq şəkil seçin ' : 'Şəkil seçin')}
            inputWithFilesContent={(files, extra) => (extra.reject ? 'Ancaq şəkil seçin ' : 'Şəkil seçin')}
            accept="image/*"
        />
    )
}


export default function cat_postvideo() {

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-body">
                        <div className="card-header-body-image">
                            <FontAwesomeIcon icon={faVideo} className="icon card-header-body-image--svg"/>
                        </div>
                        <div className="card-header-body-content">
                            <h1 className="card-header-body-content--header">
                                Video
                            </h1>
                            <span className="card-header-body-content--description">
                                Daxili video əlavə etmək üçün video və poster əlavə edin
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group required">
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="pg_cat_post-name">Daxili Video</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="pg_cat_post-name_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="pg_cat_post-name_switch"> </label>*/}
                                </div>
                            </div>
                            <VideoDropzone/>
                        </div>
                    </div>
                    <div className="form-group required">
                        <div className="form-group required">
                            <div className="label-group">
                                <label htmlFor="pg_cat_post-name">Daxili Video Posteri</label>
                                <div className="custom-control custom-switch">
                                    {/*<input type="checkbox" className="custom-control-input" id="pg_cat_post-name_switch"/>*/}
                                    {/*<label className="custom-control-label" htmlFor="pg_cat_post-name_switch"> </label>*/}
                                </div>
                            </div>
                            <ImageDropzone/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

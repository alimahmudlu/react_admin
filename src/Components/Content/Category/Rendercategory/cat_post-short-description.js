import React from "react";
import SunEditor,{buttonList} from 'suneditor-react';
import "./sun.css"

export default function cat_postshortdescription() {
    function handleImageUploadBefore(files, info){
        console.log(files, info)
    }
    function handleImageUpload(targetImgElement, index, state, imageInfo, remainingFilesCount){
        console.log(targetImgElement, index, state, imageInfo, remainingFilesCount)
    }
    function handleImageUploadError(errorMessage, result){
        console.log(errorMessage, result)
    }
    function handleVideoUploadBefore(files, info){
        console.log(files, info)
    }
    function handleVideoUpload(targetElement, index, state, info, remainingFilesCount){
        console.log(targetElement, index, state, info, remainingFilesCount)
    }
    function handleVideoUploadError(errorMessage, result){
        console.log(errorMessage, result)
    }
    function handleAudioUploadBefore(files, info){
        console.log(files, info)
    }
    function handleAudioUpload(targetElement, index, state, info, remainingFilesCount){
        console.log(targetElement, index, state, info, remainingFilesCount)
    }
    function handleAudioUploadError(errorMessage, result){
        console.log(errorMessage, result)
    }
    function handlePaste(e, cleanData, maxCharCount){
        console.log(e, cleanData, maxCharCount)
    }
    return (
        <>
            <div className="form-group required">
                <div className="label-group">
                    <label htmlFor="pg_cat_post-short-description">Postun qısa təsviri</label>
                    <div className="custom-control custom-switch">
                        {/*<input type="checkbox" className="custom-control-input" id="pg_cat_post-short-description_switch"/>*/}
                        {/*<label className="custom-control-label" htmlFor="pg_cat_post-short-description_switch"> </label>*/}
                    </div>
                </div>
                <SunEditor
                    enableToolbar={true}
                    showToolbar={true}
                    onImageUploadBefore={handleImageUploadBefore}
                    onImageUpload={handleImageUpload}
                    onImageUploadError={handleImageUploadError}
                    onVideoUploadBefore={handleVideoUploadBefore}
                    onVideoUpload={handleVideoUpload}
                    onVideoUploadError={handleVideoUploadError}
                    onAudioUploadBefore={handleAudioUploadBefore}
                    onAudioUpload={handleAudioUpload}
                    onAudioUploadError={handleAudioUploadError}
                    onPaste={handlePaste}
                    setOptions={{
                        height: 500,
                        buttonList: buttonList.formatting
                    }}
                />
            </div>
        </>
    )
}

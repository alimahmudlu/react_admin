import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import Pageheader from "../Pageheader";
import Breadcrumb from "../Breadcrumb";
import SunEditor, {buttonList} from "suneditor-react";

export default function SubscribeEdit() {
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
            <Pageheader
                pageheader_header="Abunə ol səhifəsini tənzimlə"
                pageheader_description="Abunə ol səhifəsini tənzimlərkən diqqətli olun. Etdiyiniz səhv sayt strukturunu poza bilər!"
                pageheader_icon="fas fa-bell"
            />
            <Breadcrumb/>
            <div className="content">
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-body">
                            <div className="card-header-body-image">
                                <FontAwesomeIcon icon={faExclamationTriangle} className="icon card-header-body-image--svg"/>
                            </div>
                            <div className="card-header-body-content">
                                <h1 className="card-header-body-content--header">
                                    Əsas Məlumatlar
                                </h1>
                                <span className="card-header-body-content--description">
                                    Vacib sahələr doldurulmalıdır
                                </span>
                            </div>
                            <div className="card-header-body-footer">
                                <div className="custom-control custom-switch custom-switch-big">
                                    <input type="checkbox" className="custom-control-input" id="subscribe_visible"/>
                                    <label className="custom-control-label" htmlFor="subscribe_visible"> </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="menuheader">Menyu Başlığı</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="menuheader_switch"/>*/}
                                        {/*<label className="custom-control-label" htmlFor="menuheader_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="name" className="form-control" id="menuheader" placeholder="Menyu Başlığı" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sectionheader">Bölmə Başlığı</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sectionheader_switch"/>*/}
                                        {/*<label className="custom-control-label" htmlFor="sectionheader_switch"> </label>*/}
                                    </div>
                                </div>
                                <input type="name" className="form-control" id="sectionheader" placeholder="Bölmə Başlığı" required/>
                            </div>
                            <div className="form-group required">
                                <div className="label-group">
                                    <label htmlFor="sectiondescription">Bölmə Təsviri</label>
                                    <div className="custom-control custom-switch">
                                        {/*<input type="checkbox" className="custom-control-input" id="sectiondescription_switch"/>*/}
                                        {/*<label className="custom-control-label" htmlFor="sectiondescription_switch"> </label>*/}
                                    </div>
                                </div>
                                {/*<textarea className="form-control" id="sectiondescription" placeholder="Bölmə Təsviri" required> </textarea>*/}
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
                                        height:300,
                                        buttonList: buttonList.formatting
                                    }}
                                />
                            </div>
                            <div className="form-group d-flex">
                                <button type="reset" className="btn btn-danger ml-auto">
                                    İmtina
                                    <FontAwesomeIcon icon={faTimes} className="icon ml-2"/>
                                </button>
                                <button type="submit" className="btn btn-info ml-auto">
                                    Yadda saxla
                                    <FontAwesomeIcon icon={faTelegramPlane} className="icon ml-2"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

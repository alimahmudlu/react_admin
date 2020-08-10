import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCropAlt,
    faExclamationTriangle,
    faPen,
    faPhone,
    faTimes,
    faUserCog,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import Pageheader from "../Pageheader";
import Breadcrumb from "../Breadcrumb";
import {Link} from "react-router-dom";
import defaultimg from "../../../defaultimg.png";
import {Helmet} from "react-helmet";
import {StyledDemo} from "../Profile/crop";


export default function Newuser() {

    const [selectedFile, setSelectedFile] = useState()
    const [firstPreview, setFirstPreview] = useState(defaultimg)
    const [preview, setPreview] = useState(defaultimg)
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        if (!selectedFile) {
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setFirstPreview(objectUrl)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    function onSelectFile(e) {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile()
            return
        }

        setSelectedFile(e.target.files[0])
    }

    function onRemove(e) {
        setSelectedFile(undefined)
        setPreview(defaultimg)

        var inputfile = document.getElementById("userProfileInput");
        inputfile.value = null;

        if (!selectedFile) {
            setPreview(defaultimg)
            return
        }

    }
    return (
        <>
            <Helmet>
                <title>Yeni istifadəçi | Admin Panel</title>
            </Helmet>
            <Pageheader
                pageheader_header="İstifadəçi"
                pageheader_description="İstifadəçi əlavə et"
                pageheader_icon="fas fa-user-plus"
            />
            <Breadcrumb/>
            <div className="content">
                <div className="button-group mb-2">
                    <Link to="/userlist" type="button" className="btn btn-labeled btn-labeled-left btn-info mr-2 mb-1">
                        <b>
                            <FontAwesomeIcon icon={faUsers} className="icon"/>
                        </b>
                        İstifadəçilərin siyahısı
                    </Link>
                </div>
                <form>
                    <div className="row">
                        <div className="col-lg-6">
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
                                                Vacib sahələr doldurulmalıdır.
                                            </span>
                                        </div>
                                        <div className="card-header-body-footer">
                                            <div className="custom-control custom-switch custom-switch-big">
                                                <input type="checkbox" className="custom-control-input" id="user_visible"/>
                                                <label className="custom-control-label" htmlFor="user_visible"> </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group required">
                                        <div className="label-group">
                                            <label htmlFor="username">İstifadəçi adı</label>
                                            <div className="custom-control custom-switch">
                                                {/*<input type="checkbox" className="custom-control-input" id="username_switch"  />*/}
                                                {/*<label className="custom-control-label" htmlFor="username_switch"> </label>*/}
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="username" placeholder="İstifadəçi adı" pattern="{a-z}" required/>
                                    </div>
                                    <div className="form-group required">
                                        <div className="label-group">
                                            <label htmlFor="password">Parol</label>
                                            <div className="custom-control custom-switch">
                                                {/*<input type="checkbox" className="custom-control-input" id="password_switch"  />*/}
                                                {/*<label className="custom-control-label" htmlFor="password_switch"> </label>*/}
                                            </div>
                                        </div>
                                        <input type="password" className="form-control" id="password" placeholder="Yeni Parol" required/>
                                    </div>
                                    <div className="form-group required">
                                        <div className="label-group">
                                            <label htmlFor="password_repeat">Parolun təkrarı</label>
                                            <div className="custom-control custom-switch">
                                                {/*<input type="checkbox" className="custom-control-input" id="password_repeat_switch"  />*/}
                                                {/*<label className="custom-control-label" htmlFor="password_repeat_switch"> </label>*/}
                                            </div>
                                        </div>
                                        <input type="password" className="form-control" id="password_repeat" placeholder="Yeni Parolun təkrarı" required/>
                                    </div>
                                    <div className="form-group required">
                                        <div className="label-group">
                                            <label htmlFor="user_group">İstifadəçi qrupunu seçin</label>
                                            <div className="custom-control custom-switch">
                                                {/*<input type="checkbox" className="custom-control-input" id="user_group_switch"  />*/}
                                                {/*<label className="custom-control-label" htmlFor="user_group_switch"> </label>*/}
                                            </div>
                                        </div>
                                        <select className="form-control custom-select" id="user_group" required>
                                            <option value="admin">admin</option>
                                            <option value="moderator">moderator</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-header-body">
                                        <div className="card-header-body-image">
                                            <FontAwesomeIcon icon={faUserCog} className="icon card-header-body-image--svg"/>
                                        </div>
                                        <div className="card-header-body-content">
                                            <h1 className="card-header-body-content--header">
                                                Şəxsi Məlumatlar
                                            </h1>
                                            <span className="card-header-body-content--description">
                                            Vacib sahələr doldurulmalıdır
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group required">
                                        <div className="label-group">
                                            <label htmlFor="userProfileInput">Profil şəkli</label>
                                        </div>
                                        <div className="custom-file d-none">
                                            <input  type="file" accept="image/*" className="custom-file-input" id="userProfileInput" onChange={onSelectFile} required />
                                            <label className="custom-file-label" htmlFor="userProfileInput">Choose file...</label>
                                        </div>

                                        <div className="profile-image">
                                            <img src={preview} alt="Person - Ali Mahmudlu profile pic" className="profile-image--img"/>
                                            <div className="profile-image-control">
                                                <label htmlFor="userProfileInput" className="profile-image-control-item">
                                                    <FontAwesomeIcon icon={faPen}/>
                                                </label>
                                                {preview !== defaultimg &&
                                                    <>
                                                        <span className="profile-image-control-item" onClick={onRemove}>
                                                            <FontAwesomeIcon icon={faTimes}/>
                                                        </span>
                                                        <span className="profile-image-control-item" data-toggle="modal" data-target="#exampleModal">
                                                            <FontAwesomeIcon icon={faCropAlt}/>
                                                        </span>
                                                    </>
                                                }


                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <div className="label-group">
                                            <label htmlFor="fullname">Ad, Soyad</label>
                                            <div className="custom-control custom-switch">
                                                {/*<input type="checkbox" className="custom-control-input" id="fullname_switch"  />*/}
                                                {/*<label className="custom-control-label" htmlFor="fullname_switch"> </label>*/}
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="fullname" placeholder="Ad Soyad"
                                               pattern="{a-z}" required/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="birtday">Doğum tarixi</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="birtday_switch"/>
                                                <label className="custom-control-label"
                                                       htmlFor="birtday_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="date" className="form-control" id="birtday" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="homeaddress">Ev adresi</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="homeaddress_switch"/>
                                                <label className="custom-control-label"
                                                       htmlFor="homeaddress_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="address" className="form-control" id="homeaddress"
                                               placeholder="Ev adresi"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="workaddress">İş adresi</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="workaddress_switch"/>
                                                <label className="custom-control-label"
                                                       htmlFor="workaddress_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="address" className="form-control" id="workaddress"
                                               placeholder="İş adresi"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-header-body">
                                        <div className="card-header-body-image">
                                            <FontAwesomeIcon icon={faPhone} className="icon card-header-body-image--svg"/>
                                        </div>
                                        <div className="card-header-body-content">
                                            <h1 className="card-header-body-content--header">
                                                Əlaqə Məlumatları
                                            </h1>
                                            <span className="card-header-body-content--description">
                                                Vacib sahələr doldurulmalıdır
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="email">Email</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="email_switch"  />
                                                <label className="custom-control-label" htmlFor="email_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="email" className="form-control" id="email" placeholder="Email" pattern="{a-z}"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="phone">Telefon</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="phone_switch"  />
                                                <label className="custom-control-label" htmlFor="phone_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="email" className="form-control" id="phone" placeholder="Telefon" pattern="{a-z}"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-header-body">
                                        <div className="card-header-body-image">
                                            <FontAwesomeIcon icon={faFacebook} className="icon card-header-body-image--svg"/>
                                        </div>
                                        <div className="card-header-body-content">
                                            <h1 className="card-header-body-content--header">
                                                Sosial Media Məlumatları
                                            </h1>
                                            <span className="card-header-body-content--description">
                                                Vacib sahələr doldurulmalıdır
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="facebook">Facebook</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="facebook_switch"  />
                                                <label className="custom-control-label" htmlFor="facebook_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="email" className="form-control" id="facebook" placeholder="Facebook"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="instagram">Instagram</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="instagram_switch"  />
                                                <label className="custom-control-label" htmlFor="instagram_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="email" className="form-control" id="instagram" placeholder="Instagram"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="youtube">Youtube</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="youtube_switch"  />
                                                <label className="custom-control-label" htmlFor="youtube_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="youtube" className="form-control" id="youtube" placeholder="Youtube"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="linkedin">Linkedin</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="linkedin_switch"  />
                                                <label className="custom-control-label" htmlFor="linkedin_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="youtube" className="form-control" id="linkedin" placeholder="Linkedin"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label-group">
                                            <label htmlFor="twitter">Twitter</label>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="twitter_switch"  />
                                                <label className="custom-control-label" htmlFor="twitter_switch"> </label>
                                            </div>
                                        </div>
                                        <input type="youtube" className="form-control" id="twitter" placeholder="Twitter"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group d-flex mb-0">
                                        <button type="reset" className="btn btn-danger ml-auto">
                                            İmtina
                                            <FontAwesomeIcon icon={faTimes} className="icon ml-2"/>
                                        </button>
                                        <button type="submit" className="btn btn-info ml-auto">
                                            Əlavə et
                                            <FontAwesomeIcon icon={faTelegramPlane} className="icon ml-2"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>



            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body h-200" >
                            <StyledDemo src={firstPreview} setPreview={setPreview}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

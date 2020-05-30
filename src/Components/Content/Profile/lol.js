import React, {useState, useCallback, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Slider from '@material-ui/core/Slider'
import Cropper from 'react-easy-crop'
import "./style.css"
import person from "../../../person.jpg";

export default function Lolla() {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])



    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview()
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile()
            return
        }
        setSelectedFile(e.target.files[0])
    }
    return (
        <div className="App">
            <input type='file'  onChange={onSelectFile} />
            {

                selectedFile ?
                    <div className="profile-image">
                        <div className="crop-container">
                            <Cropper
                                image={preview}
                                crop={crop}
                                zoom={zoom}
                                aspect={1 / 1}
                                cropShape="round"
                                showGrid={true}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </div>
                        <div className="controls">
                            <Slider
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                aria-labelledby="Zoom"
                                onChange={(e, zoom) => setZoom(zoom)}
                                classes={{ container: 'slider' }}
                            />
                        </div>
                    </div>
                    :
                    <div className="profile-image">
                        <img src={person} alt="Person - Ali Mahmudlu profile pic" className="profile-image--img"/>
                    </div>
            }

        </div>
    )
}

import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
const CLOUDINARY_UPLOAD_PRESET = 'menu_item_upload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/menu-bomb/image/upload';

export default class UploadForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            uploadedFile:'',
            uploadedFileCloudinaryUrl: ''
        }
    }
      handleImageUpload = (file) => {
        
        let formData = new FormData();
        formData.append("file", file[0]);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    
        axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
            console.log(response.data.secure_url);
            this.props.newImage(response.data.secure_url)
        }).catch( err => {
            console.log(err);
        })   
    }     

    render() {
        return (
            <div className='upload-form'>
            <Dropzone
            	className='dropzone-styling'
                multiple={false}
                accept="image/*"
                onDrop={this.handleImageUpload}>
                <p>Drag or click to select a file to upload.</p>
            </Dropzone>
            </div>
        );
    }
}
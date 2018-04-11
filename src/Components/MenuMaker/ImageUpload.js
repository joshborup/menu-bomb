import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

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
        
        axios.get('/api/upload-signature').then(response => {
            console.log(response.data.signature)

            let formData = new FormData();
            formData.append("signature", response.data.signature)
            formData.append("api_key", "325671952438772");
            formData.append("timestamp", response.data.timestamp)
            formData.append("file", file[0]);

            for(var pair of formData.entries()) {
                    console.log(pair); 
                 }
        
        
            axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
                console.log(response.data.secure_url);
                this.props.newImage(response.data.secure_url)
            }).catch( err => {
                console.log(err);
            })
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
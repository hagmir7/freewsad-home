import React from 'react';
import API from '../api/API';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


const { Dragger } = Upload;

export default function CreateFile() {


    const form = React.useRef()


    const CreateFile = async (e) => {
        console.log(e.target.files)
        const data = new FormData(form.current);
        await API.post('/create/file', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(respons => {
            console.log(respons)
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-8 card py-3">
                    <form ref={form} className="d-flex justify-content-center">
                        <label htmlFor="file">Uploade</label>
                        <input type="file" name="files" multiple onChange={CreateFile} className="d-none pointer" id='file' accept='*' />
                    </form>
                </div>
            </div>
        </div>
    )
}

import Upload from './Upload';
import "./fileupload.scss"

const FileUpload = () => {
    return (
        <div className='FileUpload'>
            <div className="header">
                <h1>Upload Documents</h1>
            </div>
            <div classname="row">
                <div classname="main">
                    <span classname="break"></span>

                    <Upload></Upload>
                </div>
            </div>
        </div>
    );
}

export default FileUpload
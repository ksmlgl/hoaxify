import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ProfileImageWithDefault from '../components/ProfileImageWithDefault';
import { postHoax, postHoaxAttachment } from '../api/apiCalls'
import { useApiProgress } from '../shared/ApiProgress';
import ButtonWithProgress from './ButtonWithProgress'
import Input from '../components/input'
import AutoUploadImage from './AutoUploadImage';

const HoaxSubmit = () => {
    const { image } = useSelector((store) => ({ image: store.image }));

    const { t } = useTranslation();

    const [focused, setFocused] = useState(false);
    const [hoax, setHoax] = useState('');
    const [errors, setErrors] = useState({});
    const [newImage, setNewImage] = useState();
    const [attachmentId, setAttachmentId] = useState();


    useEffect(() => {
        if (!focused) {
            setHoax('');
            setErrors({});
            setNewImage();
            setAttachmentId();
        }
    }, [focused]);

    useEffect(() => {
        setErrors({});
    }, [hoax]);

    const pendingApiCall = useApiProgress('post', '/api/1.0/hoaxes', true);
    const pendingFileUpload = useApiProgress('post', '/api/1.0/hoax-attachments', true);

    const hoaxify = async () => {
        const body = {
            content: hoax,
            attachmentId: attachmentId
        }

        try {
            await postHoax(body);
            setFocused(false);
        } catch (error) {
            setErrors(error.response.data.validationErrors);
        }

    };
    const onChangeFile = (event) => {
        if (event.target.files.length < 1) {
            return;
        }
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setNewImage(fileReader.result);
            uploadFile(file);
        }
        fileReader.readAsDataURL(file);
    }

    const uploadFile = async (file) => {

        const attachment = new FormData();
        attachment.append('image', file);
        const response = await postHoaxAttachment(attachment);
        setAttachmentId(response.data.id);
    }

    let textAreaClass = 'form-control';

    if (errors.content) {
        textAreaClass += ' is-invalid';
    }
    return (
        <div className="card p-1 flex-row">
            <ProfileImageWithDefault image={image} width="32" height="32" className="rounded-circle mr-1" />
            <div className="flex-fill">
                <textarea className={textAreaClass} rows={focused ? '3' : '1'} onFocus={() => setFocused(true)} onChange={(event) => { setHoax(event.target.value) }} value={hoax} />
                <div className="invalid-feedback">{errors.content}</div>
                {focused && (
                    <>
                        {!newImage && <Input type="file" onChange={onChangeFile} />}
                        {newImage && <AutoUploadImage image={newImage} uploading={pendingFileUpload} />}
                        <div className="text-right mt-1">
                            <ButtonWithProgress className="btn btn-primary" onClick={hoaxify}
                                text="Hoaxify"
                                pendingApiCall={pendingApiCall}
                                disabled={pendingApiCall || pendingFileUpload}
                            />
                            <button
                                className="btn btn-light d-inline-flex ml-1"
                                onClick={() => setFocused(false)} disabled={pendingApiCall || pendingFileUpload}>
                                <span className="material-icons">close </span>
                                {t('Cancel')}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default HoaxSubmit;
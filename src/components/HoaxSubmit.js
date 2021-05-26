import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ProfileImageWithDefault from '../components/ProfileImageWithDefault';
import { postHoax } from '../api/apiCalls'

const HoaxSubmit = () => {
    const { image } = useSelector((store) => ({ image: store.image }));

    const { t } = useTranslation();

    const [focused, setFocused] = useState(false);
    const [hoax, setHoax] = useState('');

    useEffect(() => {
        if (!focused) {
            setHoax('');
        }
    }, [focused]);

    const hoaxify = async () => {
        const body = {
            content: hoax
        }

        try {
            await postHoax(body);
        } catch (error) {

        }

    }

    return (
        <div className="card p-1 flex-row">
            <ProfileImageWithDefault image={image} width="32" height="32" className="rounded-circle mr-1" />
            <div className="flex-fill">
                <textarea className="form-control" rows={focused ? '3' : '1'} onFocus={() => setFocused(true)} onChange={(event) => { setHoax(event.target.value) }} value={hoax} />
                {focused && (<div className="text-right mt-1">
                    <button className="btn btn-primary" onClick={() => hoaxify()}>Hoaxify</button>
                    <button
                        className="btn btn-light d-inline-flex ml-1"
                        onClick={() => setFocused(false)}>
                        <span className="material-icons">close </span>
                        {t('Cancel')}
                    </button>
                </div>)}
            </div>
        </div>
    );
};

export default HoaxSubmit;
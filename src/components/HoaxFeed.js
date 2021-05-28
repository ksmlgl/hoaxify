import React, { useEffect, useState } from 'react';
import { getHoaxes, getNewHoaxCount, getOldHoaxes } from '../api/apiCalls'
import { useTranslation } from 'react-i18next'
import HoaxView from './HoaxView'
import { useApiProgress } from '../shared/ApiProgress';
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'


const HoaxFeed = () => {

    const { t } = useTranslation();
    const [hoaxPage, setHoaxPage] = useState({ content: [], last: true, number: 0 });
    const [newHoaxCount, setNewHoaxCount] = useState(0);
    const { username } = useParams();

    const path = username ? `/api/1.0/users/${username}/hoaxes?page=` : '/api/1.0/hoaxes?page=';
    const initialHoaxLoadProgress = useApiProgress('get', path);

    let lastHoaxId = 0;
    let firstHoaxId = 0;
    if (hoaxPage.content.length > 0) {
        const lastHoaxIndex = hoaxPage.content.length - 1;
        lastHoaxId = hoaxPage.content[lastHoaxIndex].id;
        firstHoaxId = hoaxPage.content[0].id;
    }
    const oldHoaxPath = username ? `/api/1.0/users/${username}/hoaxes/${lastHoaxId}` : '/api/1.0/hoaxes/' + lastHoaxId;
    const loadOldHoaxesProgress = useApiProgress('get', oldHoaxPath, true);


    useEffect(() => {
        const getCount = async () => {
            const response = await getNewHoaxCount(firstHoaxId, username);
            setNewHoaxCount(response.data.count);
        }
        let looper = setInterval(() => {
            getCount();
        }, 1000);

        return function cleanUp(){
            clearInterval(looper);
        }
    }, [firstHoaxId, username]);

    useEffect(() => {
        const loadHoaxes = async (page) => {
            try {
                const response = await getHoaxes(username, page);
                setHoaxPage(previousHoaxPage => ({
                    ...response.data,
                    content: [...previousHoaxPage.content, ...response.data.content]
                }));
            } catch (error) {

            }
        };
        loadHoaxes();
    }, [username]);



    const loadOldHoaxes = async () => {

        try {
            const response = await getOldHoaxes(lastHoaxId, username);

            setHoaxPage(previousHoaxPage => ({
                ...response.data,
                content: [...previousHoaxPage.content, ...response.data.content]
            }));
        } catch (error) {

        }

    };

    const { content, last } = hoaxPage;

    if (content.length === 0) {
        return <div className="alert alert-secondary text-center mb-1">{initialHoaxLoadProgress ? <Spinner /> : t('There are no hoaxes')}</div>
    }

    return (
        <div>
            {newHoaxCount>0 &&  <div className="alert alert-secondary text-center">{t('There are new hoaxes')}</div>}
            {content.map(hoax => {
                return <HoaxView key={hoax.id} hoax={hoax} />
            })
            }
            {!last && <div
                className="alert alert-secondary text-center mt-1" style={{ cursor: loadOldHoaxesProgress ? 'not-allowed' : 'pointer' }} onClick={loadOldHoaxesProgress ? () => { } : () => loadOldHoaxes()} >
                {loadOldHoaxesProgress ? <Spinner /> : t('Load old hoaxes')}</div>}
        </div>
    );
};

export default HoaxFeed;
import React from 'react';
import { useParams } from 'react-router-dom'
// import { Authentication } from '../shared/AuthenticationContext'
import {useSelector} from 'react-redux'

const ProfileCard = (props) => {

    const { username:loggedInUsername} = useSelector((store) => ({username:store.username}))
    const routeParams = useParams();
    const pathUserName = routeParams.username;
    let message = "We cannot edit";
    if (pathUserName === loggedInUsername) {
        message = "We can edit";
    }
    return (
        <div >
            {message}
        </div>
    );
};


export default ProfileCard;
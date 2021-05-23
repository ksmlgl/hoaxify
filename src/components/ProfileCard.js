import React from 'react';
import { useParams } from 'react-router-dom'
// import { Authentication } from '../shared/AuthenticationContext'
import { useSelector } from 'react-redux'
import defaultPicture from '../assets/profile.png'

const ProfileCard = (props) => {

    const { username: loggedInUsername } = useSelector((store) => ({ username: store.username }))
    const routeParams = useParams();

    const { user } = props;
    const { username, displayName, image } = user;

    const pathUserName = routeParams.username;
    let message = "We cannot edit";
    if (pathUserName === loggedInUsername) {
        message = "We can edit";
    }

    let imageSource = defaultPicture;

    if (image) {
        imageSource = user.image;
    }

    return (
        <div className="card text-center">
            <div className="card-header">
                <img className="rounded-circle shadow" width="200" height="200" alt={`${username} profile`} src={imageSource} />
            </div>
            <div className="card-body">
                <h3>{displayName}@{username}</h3>
            </div>
        </div>
    );
};


export default ProfileCard;
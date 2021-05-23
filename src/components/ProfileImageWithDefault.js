import React from 'react';
import defaultPicture from '../assets/profile.png'

const ProfileImageWithDefault = (props) => {
    let imageSource = defaultPicture;

    const {image} = props;
    if (image) {
        imageSource = image;
    }

    return (
        <img alt={`Profile`} src={imageSource} {...props} />
            
    );
};

export default ProfileImageWithDefault;
import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard'
import { getUser } from '../api/apiCalls'

const UserPage = (props) => {

    const [user, setUser] = useState();

    const { username } = props.match.params;
    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await getUser(username);
                setUser(response.data);
            } catch (error) {

            }
        }
        loadUser();
    }, [username]);



    return (
        <div className="container">
            <ProfileCard />
        </div>
    );
};

export default UserPage;
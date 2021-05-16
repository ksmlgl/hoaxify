import React from 'react';
import { withRouter } from 'react-router-dom'
// import { Authentication } from '../shared/AuthenticationContext'

const ProfileCard = (props) => {
    const pathUserName = props.match.params.username;
    const loggedInUsername = props.username
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

/*
class ProfileCardContextWrapper extends React.Component {
    static contextType = Authentication;
    render() {
        return (
            <div>
                <ProfileCard {...this.props} username={this.context.state.username}/>
            </div>
        );
    }
}
*/

export default withRouter(ProfileCard);
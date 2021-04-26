import React from "react";
import axios from "axios"
import {signup, changeLanguage} from '../api/apiCalls'
import Input from "../components/input";
import {withTranslation} from 'react-i18next';

class UserSignUpPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors:{}
    };

    onChange = event => {

        const {name, value} = event.target;
        const errors = {...this.state.errors};
        const {t} = this.props;
        errors[name] = undefined;
        if(name === 'password' || name === 'passwordRepeat'){
            if(name === 'password' && value !==  this.state.passwordRepeat){
                errors.passwordRepeat = t('Password mismatch');
            }else if(name === 'passwordRepeat' && value !==  this.state.password){
                errors.passwordRepeat = t('Password mismatch');
            }else {
                errors.passwordRepeat = undefined;
            }
        }
        this.setState({[name]: value, errors});
    };

    onClickSignup = async event => {
        event.preventDefault();

        const {username, displayName, password} = this.state;

        const body = {username, displayName, password};

        this.setState({pendingApiCall: true});
        try{
            const response = await signup(body);
        }catch (error){
            if(error.response.data.validationErrors){
                this.setState({errors: error.response.data.validationErrors});
            }
        }
        this.setState({pendingApiCall: false});
       /*     .then((response) => {
            this.setState({pendingApiCall: false});
        }).catch(error => {
            this.setState({pendingApiCall: false});
        });*/

    };

    /*onChangeUsername = event => {
        this.setState({username:event.target.value});
    };

    onChangeDisplayName = event => {
        this.setState({displayName:event.target.value});
    };

    onChangePassword = event => {
        this.setState({password:event.target.value});
    };

    onChangePasswordRepeat = event => {
        this.setState({passwordRepeat:event.target.value});
    };*/

    onChangeLanguage = language => {
        const {i18n} = this.props;
        i18n.changeLanguage(language);
        changeLanguage(language);

    }
    render() {
        const {t} = this.props
        const {pendingApiCall, errors} = this.state;
        const {username, displayName, password, passwordRepeat} = errors;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">{t('Sign Up')}</h1>
                    <Input name="username" label={t('User Name')} error={username} onChange={this.onChange}/>
                    <Input name="displayName" label={t('Display Name')} error={displayName} onChange={this.onChange}/>
                    <Input name="password" label={t('Password')} error={password} onChange={this.onChange} type="password"/>
                    <Input name="passwordRepeat" label={t('Password Repeat')} error={passwordRepeat} onChange={this.onChange} type="password"/>

                    <div className="text-center">
                        <button className="btn btn-primary" onClick={this.onClickSignup}
                                disabled={this.state.pendingApiCall || passwordRepeat !== undefined}>
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
                            {t('Sign Up')}
                        </button>
                    </div>
                    <div>
                        <img src="https://flagcdn.com/16x12/tr.png" alt="Turkish Flag" onClick={() => this.onChangeLanguage('tr')} style={{cursor:'pointer'}}></img>
                        <img src="https://flagcdn.com/16x12/us.png" alt="USA Flag" onClick={() => this.onChangeLanguage('en')} style={{cursor:'pointer'}}></img>
                    </div>
                </form>
            </div>
        );
    }
}

const UserSignupPageWithTranslation = withTranslation()(UserSignUpPage);

export default UserSignupPageWithTranslation;
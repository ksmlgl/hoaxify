import React from "react";
import axios from "axios"
import {signup} from '../api/apiCalls'
import Input from "../components/input";
import {withTranslation} from 'react-i18next';
import ButtonWithProgress from '../components/ButtonWithProgress'
import { withApiProgress } from "../shared/ApiProgress";

class UserSignUpPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
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

        try{
            const response = await signup(body);
        }catch (error){
            if(error.response.data.validationErrors){
                this.setState({errors: error.response.data.validationErrors});
            }
        }
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

    
    render() {
        const {t, pendingApiCall} = this.props
        const { errors} = this.state;
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

                        <ButtonWithProgress className="btn btn-primary" onClick={this.onClickSignup}
                                disabled={pendingApiCall || passwordRepeat !== undefined} text={t('Sign Up')} pendingApiCall={pendingApiCall}>
                        </ButtonWithProgress>
                    </div>
                    
                </form>
            </div>
        );
    }
}

const UserSignUpPageWithApiProgress = withApiProgress(UserSignUpPage, '/api/1.0/users');

const UserSignUpPageWithTranslationWithApiProgress = withTranslation()(UserSignUpPageWithApiProgress);


export default UserSignUpPageWithTranslationWithApiProgress;
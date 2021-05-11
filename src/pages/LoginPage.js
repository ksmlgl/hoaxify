import React, { Component } from 'react';
import Input from '../components/input'
import {withTranslation} from 'react-i18next'

class LoginPage extends React.Component {

state ={
    username:null,
    password:null
}

onChange = event => {
    const {name, value}=event.target;
    this.setState({
        [name]:value
    })
}

    render() {
        const {t} = this.props;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">{t('Login')}</h1>
                    <Input label={t("Username")} name="username" onChange={this.onChange}></Input>
                    <Input label={t("Password")} name="password" type="password" onChange={this.onChange}></Input>
                    <div className="text-center">
                    <button>{t('Login')}</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

const LoginPageWithTranslation = withTranslation()(LoginPage);

export default LoginPageWithTranslation;
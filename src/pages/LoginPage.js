import React, { Component } from 'react';
import Input from '../components/input'
import {withTranslation} from 'react-i18next'
import {login} from '../api/apiCalls'

class LoginPage extends React.Component {

state ={
    username:null,
    password:null,
    error:null
}

onChange = event => {
    const {name, value}=event.target;
    this.setState({
        [name]:value,
        error:null
    })
}

onClickLogin = async event => {
    event.preventDefault();
    const {username, password} = this.state;
    const creds = {
        username,password
    }
    try{
        await login(creds);
    }catch(apiError){
        this.setState({error:apiError.response.data.message});
    }
}

    render() {
        const {t} = this.props;
        const{username, password, error} = this.state;
        const buttonEnabled = username && password && !error;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">{t('Login')}</h1>
                    <Input label={t("Username")} name="username" onChange={this.onChange}></Input>
                    <Input label={t("Password")} name="password" type="password" onChange={this.onChange}></Input>
                    {this.state.error && 
                    <div className="alert alert-danger">
                       {this.state.error}
                    </div>
                    }
                    <div className="text-center">
                    <button onClick={this.onClickLogin} disabled={!buttonEnabled}>{t('Login')}</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

const LoginPageWithTranslation = withTranslation()(LoginPage);

export default LoginPageWithTranslation;
import React, { useEffect, useState } from 'react';
import { signup } from '../api/apiCalls'
import Input from "../components/input";
import { useTranslation } from 'react-i18next';
import ButtonWithProgress from '../components/ButtonWithProgress'
import { withApiProgress } from "../shared/ApiProgress";
import { useDispatch, } from 'react-redux'
import { loginHandler, signupHandler } from '../redux/authActions'

const UserSignUpPage = (props) => {

    const [form, setForm] = useState({
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        errors: {}
    })

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});

    // state = {
    //     username: null,
    //     displayName: null,
    //     password: null,
    //     passwordRepeat: null,
    //     errors: {}
    // };

    const onChange = event => {

        const { name, value } = event.target;

        const errorsCopy = { ...errors };
        errorsCopy[name] = undefined;
        setErrors((previousError) => ({ ...previousError, [name] :undefined}));
        setForm((previousForm) => ({ ...previousForm, [name]: value }));
    };

    const onClickSignup = async event => {
        event.preventDefault();

        const { history } = props;
        const { push } = history;

        const { username, displayName, password } = form;

        const body = { username, displayName, password };

        try {
            await dispatch(signupHandler(body));
            push('/');
        } catch (error) {
            if (error.response.data.validationErrors) {
                // this.setState({ errors: error.response.data.validationErrors });
                setErrors(error.response.data.validationErrors);
            }
        }

    };

    const { t } = useTranslation();
    const { username: usernameError, displayName: displayNameError, password: passwordError } = errors;
    const {  pendingApiCall } = props;


    let passwordRepeatError;
    if(form.password !== form.passwordRepeat){
        passwordRepeatError = t('Password mismatch');
    } 
    
    return (
        <div className="container">
            <form>
                <h1 className="text-center">{t('Sign Up')}</h1>
                <Input name="username" label={t('User Name')} error={usernameError} onChange={onChange} />
                <Input name="displayName" label={t('Display Name')} error={displayNameError} onChange={onChange} />
                <Input name="password" label={t('Password')} error={passwordError} onChange={onChange} type="password" />
                <Input name="passwordRepeat" label={t('Password Repeat')} error={passwordRepeatError} onChange={onChange} type="password" />

                <div className="text-center">

                    <ButtonWithProgress className="btn btn-primary" onClick={onClickSignup}
                        disabled={pendingApiCall || passwordRepeatError !== undefined} text={t('Sign Up')} pendingApiCall={pendingApiCall}>
                    </ButtonWithProgress>
                </div>

            </form>
        </div>
    );
}

const UserSignUpPageWithApiProgressForSignupRequest = withApiProgress(UserSignUpPage, '/api/1.0/users');

const UserSignUpPageWithApiProgressForAuthRequest = withApiProgress(UserSignUpPageWithApiProgressForSignupRequest, '/api/1.0/auth');

export default UserSignUpPageWithApiProgressForAuthRequest;
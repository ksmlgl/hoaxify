import React, { useEffect, useState } from 'react';
import Input from '../components/input'
import { useTranslation } from 'react-i18next'
import ButtonWithProgress from '../components/ButtonWithProgress'
import { useApiProgress } from '../shared/ApiProgress';
// import {Authentication} from '../shared/AuthenticationContext'
import { useDispatch } from 'react-redux'
import { loginHandler } from '../redux/authActions'

const LoginPage = (props) => {
    // static contextType = Authentication;

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const dispatch  = useDispatch();


    useEffect(() => {
        setError(undefined);
    }, [username, password]);


    const onClickLogin = async event => {
        event.preventDefault();
        const creds = {
            username, password
        }

        const { history } = props;
        const { push } = history;
        setError(undefined);
        try {
            await dispatch(loginHandler(creds));
            push('/');
        } catch (apiError) {
            setError(apiError.response.data.message);
        }
    };

    const pendingApiCall  = useApiProgress('/api/1.0/auth');
    const { t } = useTranslation();

    const buttonEnabled = username && password && !error;
    return (
        <div className="container">
            <form>
                <h1 className="text-center">{t('Login')}</h1>
                <Input label={t("User Name")} onChange={(event) => { setUsername(event.target.value);  }}></Input>
                <Input label={t("Password")} type="password" onChange={(event) => { setPassword(event.target.value); }}></Input>
                {error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }
                <div className="text-center">
                    <ButtonWithProgress onClick={onClickLogin} disabled={!buttonEnabled || pendingApiCall} pendingApiCall={pendingApiCall} text={t('Login')}></ButtonWithProgress>
                </div>
            </form>

        </div>
    );

}



export default LoginPage;
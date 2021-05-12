import i18n from 'i18next'
import {initReactI18next} from "react-i18next";

i18n.use(initReactI18next).init({
    resources:{
        en:{
            translations:{
                'Sign Up': 'Sign Up',
                'Password mismatch': 'Password mismatch',
                'User Name': 'User Name',
                'Display Name' : 'Display Name',
                'Password': 'Password',
                'Password Repeat': 'Password Repeat',
                Login:'Login',
                'Unauthorized': 'Unauthorized'
            }
        },
        tr:{
            translations:{
                'Sign Up': 'Kayıt Ol',
                'Password mismatch': 'Aynı şifreyi giriniz',
                'User Name': 'Kullanıcı adı',
                'Display Name': 'Tercih edilen isim',
                'Password': 'Şifre',
                'Password Repeat': 'Şifre Tekrarla',
                'Login': 'Sisteme Gir',
                'Unauthorized': 'Yetkisiz'
            }
        }
    },
    fallbackLng:'tr',
    ns:['translations'],
    defaultNS:'translations',
    keySeparator:false,
    interpolation:{
        escapeValue:false,
        formatSeparator:',',
    },
    react:{
        wait:true
    }
});

export default i18n;
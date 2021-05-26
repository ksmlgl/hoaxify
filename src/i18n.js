import i18n from 'i18next'
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Sign Up': 'Sign Up',
                'Password mismatch': 'Password mismatch',
                'User Name': 'User Name',
                'Display Name': 'Display Name',
                'Password': 'Password',
                'Password Repeat': 'Password Repeat',
                Login: 'Login',
                'Unauthorized': 'Unauthorized',
                'Logout': 'Logout',
                'Users': 'Users',
                'Next': 'Next >',
                'Previous': '< Previous',
                'Load Failure': 'Load Failure',
                'User not found': 'User not found',
                'Edit': 'Edit',
                'Save': 'Save',
                'Cancel': 'Cancel',
                'Change Display Name':'Change Display Name',
                'My Profile': 'My Profile',
                'There are no hoaxes': 'There are no hoaxes',
                'Load old hoaxes':'Load old hoaxes'
            }
        },
        tr: {
            translations: {
                'Sign Up': 'Kayıt Ol',
                'Password mismatch': 'Aynı şifreyi giriniz',
                'User Name': 'Kullanıcı adı',
                'Display Name': 'Tercih edilen isim',
                'Password': 'Şifre',
                'Password Repeat': 'Şifre Tekrarla',
                'Login': 'Sisteme Gir',
                'Unauthorized': 'Yetkisiz',
                'Logout': 'Çık',
                'Users': 'Kullanıcılar',
                'Next': 'Sonraki >',
                'Previous': '< Önceki',
                'Load Failure': 'Liste alınamadı',
                'User not found': 'Kullanıcı bulunamadı',
                'Edit': 'Düzenle',
                'Save': 'Kaydet',
                'Cancel': 'İptal Et',
                'Change Display Name':'Görünür isminizi değiştirin',
                'My Profile': 'Hesabım',
                'There are no hoaxes': 'Hoax bulunamadı',
                'Load old hoaxes':'Eski hoaxları getir'
            }
        }
    },
    fallbackLng: 'tr',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
    react: {
        wait: true
    }
});

export default i18n;
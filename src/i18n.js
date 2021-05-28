import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import {register} from 'timeago.js'

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
                'Load old hoaxes':'Load old hoaxes',
                'There are new hoaxes':'There are new hoaxes'
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
                'Load old hoaxes':'Eski hoaxları getir',
                'There are new hoaxes': 'Yeni hoaxlar var'
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

const timeagoTR = (number, index) => {
    return [
      ['az önce', 'şimdi'],
      ['%s saniye önce', '%s saniye içinde'],
      ['1 dakika önce', '1 dakika içinde'],
      ['%s dakika önce', '%s dakika içinde'],
      ['1 saat önce', '1 saat içinde'],
      ['%s saat önce', '%s saat içinde'],
      ['1 gün önce', '1 gün içinde'],
      ['%s gün önce', '%s gün içinde'],
      ['1 hafta önce', '1 hafta içinde'],
      ['%s hafta önce', '%s hafta içinde'],
      ['1 ay önce', '1 ay içinde'],
      ['%s ay önce', '%s ay içinde'],
      ['1 yıl önce', '1 yıl içinde'],
      ['%s yıl önce', '%s yıl içinde'],
    ][index];
  }

  register('tr', timeagoTR);

export default i18n;
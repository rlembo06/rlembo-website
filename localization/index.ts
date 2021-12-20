import i18n, { TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';
import enGB from './en_GB';
import frFR from './fr_FR';

import 'moment/locale/fr';

export const resources = {
  en: enGB,
  fr: frFR,
};

const localizationInit = (): Promise<TFunction> =>
  i18n.use(initReactI18next).init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    defaultNS: 'commons',

    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === undefined) {
          return value;
        }

        if (format === 'uppercase') {
          return value.toUpperCase();
        }

        if (!Number.isNaN(value) && !Number.isNaN(parseFloat(value))) {
          return Intl.NumberFormat(lng).format(value);
        }

        if (value instanceof Date && lng) {
          const dateValue = moment(value);
          dateValue.locale(lng);
          return dateValue.format(format);
        }

        return value;
      },
    },
  });

export default localizationInit;
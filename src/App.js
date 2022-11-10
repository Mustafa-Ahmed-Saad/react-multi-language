import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './App.css';
import cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import GlobalIcon from './components/Icons/GlobalIcon';
import { ChakraProvider } from '@chakra-ui/react';
import translateFile from '../public/assets/locales/en/translation.json'; // Your file path

import FormLanguage from './components/FormLanguage';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    country_code: 'sa',
    dir: 'rtl',
  },
];

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((lg) => lg.code === currentLanguageCode);
  // t function will reder text in assets\locales\languages
  const { t } = useTranslation();

  const releaseDate = new Date('2021-03-07');
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('app_title');
  }, [currentLanguage, t]);

  const [initValues, setInitValues] = useState(translateFile);
  const SubmitFormik = (values) => {
    setInitValues(values);
    // TODO: write this values in translation file
    console.log(values);
  };

  return (
    <ChakraProvider>
      <div className="container">
        {/* global icon */}
        <div className="d-flex justify-content-end">
          <div className="dropdown">
            <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <GlobalIcon />
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                {' '}
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                    <span className={`flag-icon flag-icon-${country_code} mx-2`} style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* language text */}
        <div className="d-flex flex-coumn align-items-start">
          <h1>{t('welcome_message')}</h1>
        </div>
        <p>{t('days_since_release', { number_of_days })}</p>
        <p>{t('days_since_release', { number_of_days: 10 })}</p>
        <br />
        <br />
        <br />
        {/* translate (lable and input) */}
        <FormLanguage onSubmit={SubmitFormik} values={initValues} />
      </div>
    </ChakraProvider>
  );
}

export default App;

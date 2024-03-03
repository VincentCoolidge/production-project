import { useTranslation } from 'react-i18next';

function Main() {
    const { t } = useTranslation('main');

    return (
        <div>
            <span>{t('Главная страница')}</span>
        </div>
    );
}

export default Main;

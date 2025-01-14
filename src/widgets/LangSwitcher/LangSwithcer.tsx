import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwithcerProps {
  className?: string;
}

const LangSwithcer = ({ className }: LangSwithcerProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwithcer, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};

export default LangSwithcer;

import { useTheme, Theme } from 'app/providers/ThemeProvider';

import Button, { ThemeButton } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toogleTheme, theme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toogleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;

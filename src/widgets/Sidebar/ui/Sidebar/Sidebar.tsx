import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import { useState } from 'react';
import LangSwithcer from 'widgets/LangSwitcher/LangSwithcer';
import Button from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher className="" />
                <LangSwithcer className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;

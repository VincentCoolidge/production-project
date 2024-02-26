import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";

import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import { useState } from "react";

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
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher className="" />
      </div>
    </div>
  );
};

export default Sidebar;

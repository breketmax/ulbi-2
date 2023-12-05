import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps): React.JSX.Element => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => { setCollapsed((prev) => !prev); };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>{t('toggle')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};

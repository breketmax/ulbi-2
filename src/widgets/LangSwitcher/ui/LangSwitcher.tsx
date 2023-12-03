import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps): React.JSX.Element => {
  const { t, i18n } = useTranslation();

  const switchLang = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={switchLang}
    >
      {t('Язык')}
    </Button>
  );
};

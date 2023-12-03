import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps): React.JSX.Element => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

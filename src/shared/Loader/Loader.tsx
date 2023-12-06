import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps): React.JSX.Element => {
  return (
    <div className={classNames('lds-ring', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

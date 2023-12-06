import { classNames } from 'shared/lib/classNames/classNames';
import './PageLoader.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps): React.JSX.Element => {
  return (
    <div className={classNames('page__loader', {}, [className])}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

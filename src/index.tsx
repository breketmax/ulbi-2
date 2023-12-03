import Root from 'app/Root';
import { createRoot } from 'react-dom/client';
import 'shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));

root.render(
  <Root/>
);

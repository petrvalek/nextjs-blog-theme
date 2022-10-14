import { useEffect } from 'react';

import ArticlePreview from '../components/templates/Post';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();

      CMS.registerPreviewTemplate('article', ArticlePreview);
    })();
  }, []);

  return <div />;
};

export default Admin;

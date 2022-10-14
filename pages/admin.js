import { useEffect } from 'react';

import BlogPreview from '../components/templates/Post';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();

      CMS.registerPreviewStyle('/admin/main.css');
      CMS.registerPreviewTemplate('blog', BlogPreview);
    })();
  }, []);

  return <div />;
};

export default Admin;

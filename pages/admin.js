import { useEffect } from 'react';
const style_path = '../styles/globals.css';

import BlogPreview from '../components/templates/Post';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();

      CMS.registerPreviewStyle(style_path);
      CMS.registerPreviewTemplate('blog', BlogPreview);
    })();
  }, []);

  return <div />;
};

export default Admin;

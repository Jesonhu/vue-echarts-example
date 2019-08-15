import config from './config';
import { setDocTitle } from './utils/dom';
import router from './router';

router.beforeEach((to, from, next) => {
  to.meta && (typeof to.meta.title !== 'undefined') && setDocTitle(`${to.meta.title} - ${config.baseTitle}`);
  next();
});
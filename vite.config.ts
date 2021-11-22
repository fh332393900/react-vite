import { defineConfig } from 'vite';
import createVitePlugins from './config/plugins';
import cssOption from './config/style';
import { VITE_APP_BASE, VITE_APP_PORT, VITE_APP_OPEN } from './config';
import proxy from './config/setupProxy';

export default defineConfig((configEnv) => {
  return {
    base: VITE_APP_BASE,
    plugins: createVitePlugins(),
    css: cssOption,
    server: {
      host: true,
      port: VITE_APP_PORT,
      open: VITE_APP_OPEN,
      proxy,
    },
  };
});

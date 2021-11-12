import { defineConfig } from 'vite';
import createVitePlugins from './config/plugins';
import cssOption from './config/style';

export default defineConfig((configEnv) => {
  return {
    plugins: createVitePlugins(),
    css: cssOption
  };
});